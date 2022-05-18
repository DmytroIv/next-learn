import { H } from "../components";
import { withLayout } from "../layout/Layout";
import { IHomeProps } from "../interfaces/Home.interface";

export function Error404({ menu }: IHomeProps): JSX.Element {

  return (
    <div>
      <H tag="h1">Page not found , ERROR 404</H>
    </div>
  );
}

export default withLayout(Error404);


