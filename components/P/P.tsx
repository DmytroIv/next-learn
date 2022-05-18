import { IPProps } from "./P.props";
import cn from 'classnames';

import styles from './P.module.css';

export const P = ({ children, size = 'm', ...props }: IPProps): JSX.Element => {
  return (
    <p className={ cn(styles.p, styles[size]) } { ...props }>{ children }</p>
  );
};
