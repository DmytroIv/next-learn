import { IMenuItem } from "./Menu.interface";
import { ITopPageModel, TopLevelCategory } from "./TopPage.interface";
import { IProductModel } from "./Product.interface";

export interface ITopPageProps extends Record<string, unknown>{
  firstCategory: TopLevelCategory
  menu: IMenuItem[]
  page: ITopPageModel
  products: IProductModel[]
}

export interface ITypeProps extends Record<string, unknown>{
  firstCategory: TopLevelCategory
  menu: IMenuItem[]
}
