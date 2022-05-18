import { IDividerProps } from "./Divider.props";

import cn from 'classnames';
import styles from './Divider.module.css';

export const Divider = ({ className, ...props }: IDividerProps): JSX.Element => {
  return (
    <hr className={cn(styles.hr, className)} { ...props } />
  );
};
