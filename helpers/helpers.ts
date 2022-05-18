import { IFirstLevelMenuItem } from "../interfaces/Menu.interface";
import { TopLevelCategory } from "../interfaces/TopPage.interface";

export const firstLevelMenu: IFirstLevelMenuItem[] = [
  { route: 'courses', name: 'Courses', icon: '🎓', id: TopLevelCategory.Courses },
  { route: 'services', name: 'Services', icon: '☁️', id: TopLevelCategory.Services },
  { route: 'books', name: 'Books', icon: '📚', id: TopLevelCategory.Books },
  { route: 'products', name: 'Products', icon: '📦', id: TopLevelCategory.Products }
];

export const priceUA = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₴');
};

export const decOfNum = (number: number, title: [string, string]): string => {
  return title[number === 1 ? 0 : 1];
};
