import { withLayout } from "../../layout/Layout";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";
import { IMenuItem } from "../../interfaces/Menu.interface";
import { ITopPageModel } from "../../interfaces/TopPage.interface";
import { ParsedUrlQuery } from "querystring";
import { IProductModel } from "../../interfaces/Product.interface";
import { firstLevelMenu } from "../../helpers/helpers";
import { TopPageComponent } from "../../page-components";
import { ITopPageProps } from "../../interfaces/Types.interface";
import { API } from "../../helpers/api";
import { Head } from "next/document";
import { Error404 } from "../404";

function TopPage({ page, products, firstCategory }: ITopPageProps): JSX.Element {

  if (!page && !products) {
    return <Error404 firstCategory={0} />;
  }

  return <>
    <Head>
      <title>{ page.metaTitle }</title>
      <meta name="description" content={ page.metaDescription } />

      <meta property="og:title" content={ page.metaTitle } />
      <meta property="og:description" content={ page.metaDescription } />
      <meta property="og:type" content="article" />
    </Head>
    <TopPageComponent page={ page }
                      products={ products }
                      firstCategory={ firstCategory }
    />
  </>;
}

export default withLayout(TopPage);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];
  for (const f of firstLevelMenu) {
    const menuApiUrl = API.topPage.find;
    const { data: menu } = await axios.post<IMenuItem[]>(menuApiUrl, {
      firstCategory: f.id
    });
    paths = paths.concat(menu.flatMap((m) => m.pages.map((p) => `/${ f.route }/${ p.alias }`)));
  }

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps<ITopPageProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {

  if (!params) {
    return {
      notFound: true
    };
  }

  const firstCategoryItem = firstLevelMenu.find((m) => m.route === params.type);
  if (!firstCategoryItem) {
    return {
      notFound: true
    };
  }

  try {
    const menuApiUrl = API.topPage.find;
    const { data: menu } = await axios.post<IMenuItem[]>(menuApiUrl, {
      firstCategory: firstCategoryItem.id
    });

    if (!menu.length) {
      return {
        notFound: true
      };
    }

    const pageApiUrl = API.topPage.byAlias + params.alias;
    const { data: page } = await axios.get<ITopPageModel>(pageApiUrl);
    const productApiUrl = API.product.find;
    const { data: products } = await axios.post<IProductModel[]>(productApiUrl, {
      category: page.category,
      limit: 10
    });

    return {
      props: {
        firstCategory: firstCategoryItem.id,
        page,
        products,
        menu
      }
    };
  } catch (err) {
    return {
      notFound: true
    };
  }
};

