import { IMenuItem } from "./Menu.interface";

export interface IHomeProps extends Record<string, unknown>{
  firstCategory: number
  menu: IMenuItem[]
}
