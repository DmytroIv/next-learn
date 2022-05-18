import { useEffect, useState, useRef, KeyboardEvent, forwardRef, ForwardedRef } from "react";
import { IRatingProps } from "./Rating.props";

import cn from 'classnames';
import styles from './Rating.module.css';

export const Rating = forwardRef(({
                                    className,
                                    isEditable = false,
                                    rating,
                                    setRating,
                                    error,
                                    tabIndex,
                                    ...props
                                  }: IRatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [ratingArr, setRatingArr] = useState<JSX.Element[]>(new Array(5).fill(<></>));
  const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    constructRating(rating);
  }, [rating, tabIndex]);


  const handleKey = (e: KeyboardEvent<HTMLSpanElement>) => {
    if (!isEditable || !setRating) return;

    if (e.code === 'ArrowRight' || e.code === 'ArrowUp') {
      if (!rating) {
        setRating(1);
      } else {
        e.preventDefault();
        setRating(rating < 5 ? rating + 1 : 5);
      }
      ratingArrayRef.current[rating]?.focus();
    }

    if (e.code === 'ArrowLeft' || e.code === 'ArrowDown') {
      e.preventDefault();
      setRating(rating > 1 ? rating - 1 : 1);

      ratingArrayRef.current[rating - 2]?.focus();
    }
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) return;

    setRating(i);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) return;

    constructRating(i);
  };

  const computedFocus = (r: number, i: number): number => {
    if (!isEditable) return -1;

    if (r === 1 + 1) {
      return tabIndex ?? 0;
    }

    if (!r && i === 0) {
      return tabIndex ?? 0;
    }

    return -1;
  };

  const constructRating = (currRating: number) => {
    const updatedArr = ratingArr.map((r: JSX.Element, i: number) =>
      (<span
        className={ styles.star }
        onMouseEnter={ () => changeDisplay(i + 1) }
        onMouseLeave={ () => changeDisplay(rating) }
        onClick={ () => onClick(i + 1) }
        tabIndex={ computedFocus(rating, i) }
        onKeyDown={ handleKey }
        ref={ (r) => ratingArrayRef.current?.push(r) }
      >
        { i < currRating ? '★️' : '☆' }
      </span>));

    setRatingArr(updatedArr);
  };

  return (
    <div
      className={ cn(className, styles.ratingWrapper, { [styles.editable]: isEditable, [styles.error]: error }) }
      ref={ ref }
      { ...props }
    >
      { ratingArr.map((R: JSX.Element, i: number) => (<span key={ i }>{ R }</span>)) }
      { error && <span className={ styles.errorMessage }>{ error.message }</span> }
    </div>
  );
});
