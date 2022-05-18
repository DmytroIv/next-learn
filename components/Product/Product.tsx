import Image from 'next/image';
import { ForwardedRef, forwardRef, useRef, useState } from "react";
import { IProductProps } from "./Product.props";
import { Card } from "../Card/Card";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";
import { decOfNum, priceUA } from "../../helpers/helpers";
import { Divider } from "../Divider/Divider";
import { Review } from "../Review/Review";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { motion } from 'framer-motion';

import cn from 'classnames';
import styles from './Product.module.css';

export const Product = motion(forwardRef(({
                                            product,
                                            className,
                                            ...props
                                          }: IProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [isReviewOpen, setIsReviewOpen] = useState<boolean>(false);
  const reviewRef = useRef<HTMLDivElement>(null);

  const variants = {
    visible: {
      opacity: 1,
      height: 'auto'
    },
    hidden: {
      opacity: 0,
      height: 0
    }
  };

  const scrollToReview = () => {
    setIsReviewOpen(true);
    reviewRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
    reviewRef.current?.focus();
  };

  return (
    <div className={ className } { ...props } ref={ ref }>
      <Card className={ styles.product }>
        <div className={ styles.logo }>
          <Image src={ `${ process.env.NEXT_PUBLIC_DOMAIN }/${ product.image }` }
                 alt={ product.title }
                 width={ 70 }
                 height={ 70 }
          />
        </div>
        <div className={ styles.title }>{ product.title }</div>
        <div className={ styles.price }>
          { priceUA(product.price) }
          { product.oldPrice &&
          <Tag className={ styles.oldPrice }
               size='m'
               color="green">{ priceUA(product.price - product.oldPrice) }</Tag> }
        </div>
        <div className={ styles.credit }>{ priceUA(product.credit) }/<span className={ styles.months }>months</span>
        </div>
        <div className={ styles.rating }><Rating rating={ product.reviewAvg ?? product.initialRating } /></div>
        <div className={ styles.tags }>{ product.categories.map((t) =>
          (<Tag className={ styles.category } key={ t } color="ghost">{ t }</Tag>)) }
        </div>
        <div className={ styles.priceTitle }>Price</div>
        <div className={ styles.creditTitle }>Credits</div>
        <div
          className={ styles.rateTitle }>
          <a href="#ref"
             onClick={ scrollToReview }>
            { product.reviewCount } { decOfNum(product.reviewCount, ['review', 'reviews']) }
          </a>
        </div>
        <Divider className={ styles.hr } />
        <div className={ styles.description }>{ product.description }</div>
        <div className={ styles.features }>
          { product.characteristics.map((c) => (
            <div className={ styles.characteristics } key={ c.name }>
              <span className={ styles.characteristicsName }>{ c.name }</span>
              <span className={ styles.characteristicsDots } />
              <span className={ styles.characteristicsValue }>{ c.value }</span>
            </div>
          )) }
        </div>
        <div className={ styles.advBlock }>
          { product.advantages && <div className={ styles.advantages }>
            <div className={ styles.advTitle }>Advantages</div>
            { product.advantages }
          </div> }
          { product.disadvantages && <div className={ styles.disadvantages }>
            <div className={ styles.advTitle }>Disadvantages</div>
            { product.disadvantages }
          </div> }
        </div>
        <Divider className={ cn(styles.hr, styles.hr2) } />
        <div className={ styles.actions }>
          <Button appearance="primary">Learn more</Button>
          <Button appearance="ghost"
                  className={ styles.reviewBtn }
                  arrow={ isReviewOpen ? "down" : "right" }
                  onClick={ () => setIsReviewOpen(!isReviewOpen) }>Read reviews</Button>
        </div>
      </Card>
      <motion.div animate={ isReviewOpen ? 'visible' : 'hidden' } variants={ variants } initial="hidden">
        <Card tabIndex={ isReviewOpen ? 0 : -1 } ref={ reviewRef } color="blue" className={ cn(styles.reviews) }>
          { product.reviews.map((r) =>
            <div key={ r._id }>
              <Review review={ r } />
              <Divider />
            </div>) }
          <ReviewForm isOpened={isReviewOpen} productId={ product._id } />
        </Card>
      </motion.div>
    </div>
  );
}));
