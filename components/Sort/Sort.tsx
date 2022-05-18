import { ISortProps, SortEnum } from "./Sort.props";
import cn from 'classnames';

import styles from './Sort.module.css';

export const Sort = ({ sort, setSort, className, ...props }: ISortProps): JSX.Element => {
  return (
    <div className={ cn(className, styles.sort) } { ...props }>
      <button className={ cn({ [styles.active]: sort === SortEnum.Rating }) }
            onClick={ () => setSort(SortEnum.Rating) }><span className={styles.icon}>⭡⭣</span>By Rating</button>
      <button className={ cn({ [styles.active]: sort === SortEnum.Price }) }
            onClick={ () => setSort(SortEnum.Price) }><span className={styles.icon}>⭡⭣</span>By Price</button>
    </div>
  );
};
