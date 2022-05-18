import { H } from "../components";
import { withLayout } from "../layout/Layout";
import { IHomeProps } from "../interfaces/Home.interface";

function Error500({ menu }: IHomeProps): JSX.Element {

  return (
    <div>
      <H tag="h1">Site is in maintained mode , ERROR 500</H>
    </div>
  );
}

export default withLayout(Error500);


