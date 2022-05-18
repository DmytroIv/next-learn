import { ForwardedRef, forwardRef } from "react";
import { ICardProps } from "./Card.props";

import cn from 'classnames';
import styles from './Card.module.css';

export const Card = forwardRef(({
                                  children,
                                  color = 'white',
                                  className,
                                  ...props
                                }: ICardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  return (
    <div ref={ ref } className={ cn(styles.card, className, styles[color]) } { ...props }>{ children }</div>
  );
});
