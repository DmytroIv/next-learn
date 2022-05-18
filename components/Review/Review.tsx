import { IReviewProps } from "./Review.props";
import { Rating } from "../Rating/Rating";

import cn from 'classnames';
import styles from './Review.module.css';

export const Review = ({ review, className, ...props }: IReviewProps): JSX.Element => {
  const { name, title, description, createdAt, rating } = review;

  return (
    <div className={ cn(styles.review, className) } { ...props }>
      <div className={ styles.image }>🥹</div>
      <div className={styles.title}>
        <b className={ styles.name }>{ name }: </b>&nbsp;&nbsp;
        <span>{ title }: </span>
      </div>
      <div className={ styles.date }>
        { new Date(createdAt).toDateString() }
      </div>
      <div className={ styles.rating }>
        <Rating rating={ rating } />
      </div>
      <div className={ styles.description }>{ description }</div>
    </div>
  );
};
