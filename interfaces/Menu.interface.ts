import { TopLevelCategory } from "./TopPage.interface";

export interface IPageItem {
  alias: string
  title: string
  _id: string
  category: string
}

export interface IMenuItem {
  _id: {
    secondCategory: string
  }
  isOpened?: boolean
  pages: IPageItem[]
}

export interface IFirstLevelMenuItem {
  route: string
  name: string
  icon: string | JSX.Element
  id: TopLevelCategory
}
