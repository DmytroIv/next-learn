import { ISortProps, SortEnum } from "./Sort.props";
import cn from 'classnames';

import styles from './Sort.module.css';

export const Sort = ({ sort, setSort, className, ...props }: ISortProps): JSX.Element => {
  return (
    <div className={ cn(className, styles.sort) } { ...props }>
      <div id="sort" className={ styles.sortName }>Sorting</div>
      <button id="rating"
              className={ cn({ [styles.active]: sort === SortEnum.Rating }) }
              onClick={ () => setSort(SortEnum.Rating) }
              aria-selected={ sort === SortEnum.Rating }
              aria-labelledby="sort rating"
      >
        <span className={ styles.icon }>⭡⭣</span>By Rating
      </button>
      <button id="price"
              className={ cn({ [styles.active]: sort === SortEnum.Price }) }
              onClick={ () => setSort(SortEnum.Price) }
              aria-selected={ sort === SortEnum.Price }
              aria-labelledby="sort price"
      >
        <span className={ styles.icon }>⭡⭣</span>By Price
      </button>
    </div>
  );
};
