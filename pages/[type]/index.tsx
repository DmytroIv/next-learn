import { withLayout } from "../../layout/Layout";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import axios from "axios";
import { IMenuItem } from "../../interfaces/Menu.interface";
import { ParsedUrlQuery } from "querystring";
import { firstLevelMenu } from "../../helpers/helpers";
import { ITypeProps } from "../../interfaces/Types.interface";
import { API } from "../../helpers/api";

function Type(): JSX.Element {
  return (
    <div>
      Search
    </div>
  );
}

export default withLayout(Type);

export const getStaticPaths: GetStaticPaths = async () => {

  return {
    paths: firstLevelMenu.map(m => '/' + m.route),
    fallback: true
  };
};

export const getStaticProps: GetStaticProps<ITypeProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {

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

    return {
      props: {
        menu: menu,
        firstCategory: firstCategoryItem.id,
      }
    };
  } catch (err) {
    return {
      notFound: true
    };
  }
};

