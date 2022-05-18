import { Button, H, P, Rating, Tag } from "../components";
import { useState } from "react";
import { withLayout } from "../layout/Layout";
import { GetStaticProps } from "next";
import axios from "axios";
import { IMenuItem } from "../interfaces/Menu.interface";
import { IHomeProps } from "../interfaces/Home.interface";
import { API } from "../helpers/api";

function Home({ menu }: IHomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(3);

  return (
    <div>
      <H tag="h2">Heading text</H>
      <Button appearance="primary">Submit</Button>
      <Button appearance="ghost">Submit</Button>
      <Button appearance="ghost" arrow="right">Submit</Button>
      <Button appearance="primary" arrow="down">Submit</Button>
      <hr />
      <P size='s'>Some inner text</P>
      <P>Some inner text</P>
      <P size='l'>Some inner text</P>
      <hr />
      <Tag color="primary" size='l'>Tag 1</Tag>
      <Tag color="red">Tag 1</Tag>
      <Tag color="green" size='l'>Tag 1</Tag>
      <hr />
      <Rating rating={ 3 } />
      <Rating isEditable={ true } rating={ rating } setRating={ setRating } />
    </div>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {

  const firstCategory = 0;
  const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
    firstCategory
  });

  return {
    props: {
      menu: menu,
      firstCategory
    }
  };
};

