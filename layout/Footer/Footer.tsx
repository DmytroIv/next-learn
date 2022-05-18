import { IHeaderProps } from "./Footer.props";
import cn from 'classnames';

import styles from './Footer.module.css';

export const Footer = ({ className, ...props }: IHeaderProps): JSX.Element => {
  return (
    <footer  className={cn(className, styles.footer)} {...props} role="footer">
      <div>App site {new Date().getFullYear()}</div>
      <div>Link A</div>
      <div>Link B</div>
    </footer>
  );
};
