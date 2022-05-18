import { ForwardedRef, forwardRef } from "react";
import { IInputProps } from "./Input.props";

import cn from 'classnames';
import styles from './Input.module.css';

export const Input = forwardRef(({
                                   className,
                                   error,
                                   ...props
                                 }: IInputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
  return (
    <div className={cn(styles.inputWrapper, className)}>
      <input className={ cn(styles.input, {
        [styles.error]: error
      }) } ref={ ref } { ...props } />
      { error && <span className={styles.errorMessage}>{ error.message }</span> }
    </div>
  );
});
