import { useEffect, useReducer } from 'react';
import { ITopPageComponentProps } from './TopPageComponent.props';
import { Advantages, H, HhData, Product, Sort, Tag } from '../../components';
import styles from './TopPageComponent.module.css';
import { TopLevelCategory } from '../../interfaces/TopPage.interface';
import { SortEnum } from '../../components/Sort/Sort.props';
import { sortReducer } from './sort.reducer';

export const TopPageComponent = ({ page, products, firstCategory }: ITopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, {
    products,
    sort: SortEnum.Rating
  });

  useEffect(() => {
    dispatchSort({ type: 'reset', initialState: products });
  }, [products]);


  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  return (
    <div className={ styles.wrapper }>
      <div className={ styles.title }>
        <H tag="h1">{ page.title }</H>
        { products && <Tag color="gray" size="l">{ products.length }</Tag> }
        <Sort sort={ sort } setSort={ setSort } />
      </div>
      <div>
        { sortedProducts && sortedProducts.map((p) => (<Product layout key={ p._id } product={ p } />)) }
      </div>
      <div className={ styles.hhTitle }>
        <H tag="h2">Vacancies - { page.category }</H>
        { products && <Tag color="red" size="l">UA.ua</Tag> }
      </div>
      { firstCategory === TopLevelCategory.Courses && page.hh && <HhData { ...page.hh } /> }
      { page.advantages && !!page.advantages.length && <>
        <H tag="h2">Advantages</H>
        <Advantages advantages={ page.advantages } />
      </> }
      { page.seoText && <div className={ styles.seo } dangerouslySetInnerHTML={ { __html: page.seoText } } /> }
      <H tag="h2">Getting Skills</H>
      { page.tags.map((t) => (<Tag key={ t } color="primary">{ t }</Tag>)) }
    </div>
  );
};
