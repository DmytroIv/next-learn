import { ISidebarProps } from "./Sidebar.props";
import { Search } from "../../components";
import { Menu } from "../Menu/Menu";

import cn from 'classnames';
import styles from './Sidebar.module.css';

export const Sidebar = ({ className, ...props }: ISidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidenav)} { ...props }>
      <div className={styles.logo}>Zoo... 🦉🐳🐜🦍🐆</div>
      <Search />
      <Menu />
    </div>
  );
};
