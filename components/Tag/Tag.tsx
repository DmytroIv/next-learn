import { ITagProps } from "./Tag.props";

import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({ size = 'm', color, children, href, className, ...props }: ITagProps): JSX.Element => {

  return <div className={ cn(styles.tag, styles[color], styles[size], className) } { ...props }>
    { href
      ? <a href={ href }>{ children }</a>
      : <>{ children }</>
    }
  </div>;
};
