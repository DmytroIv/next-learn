import { withLayout } from "../layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { IMenuItem } from "../interfaces/Menu.interface";
import { ITypeProps } from "../interfaces/Types.interface";
import { API } from "../helpers/api";

function Search(): JSX.Element {
  return (
    <div>
      Search
    </div>
  );
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<ITypeProps> = async () => {
  const menuApiUrl = API.topPage.find;
  const { data: menu } = await axios.post<IMenuItem[]>(menuApiUrl, {
    firstCategory: 0
  });

  if (!menu.length) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      menu: menu,
      firstCategory: 0
    }
  };
};

