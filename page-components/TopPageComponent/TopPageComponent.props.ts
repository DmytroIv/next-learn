import { ITopPageModel, TopLevelCategory } from "../../interfaces/TopPage.interface";
import { IProductModel } from "../../interfaces/Product.interface";

export interface ITopPageComponentProps extends Record<string, unknown>{
  firstCategory: TopLevelCategory
  page: ITopPageModel
  products: IProductModel[]
}

