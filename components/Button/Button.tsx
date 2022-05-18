import { IButtonProps } from "./Button.props";
import { motion, useMotionValue } from "framer-motion";

import cn from 'classnames';
import styles from './Button.module.css';
import { useEffect } from "react";

export const Button = ({
                         appearance,
                         className,
                         children,
                         onClick,
                         arrow = 'none',
                         ...props
                       }: IButtonProps): JSX.Element => {
  const scale = useMotionValue(1);

  return (
    <motion.button
      whileHover={ { scale: 1.05 } }
      style={ { scale } }
      onClick={ onClick }
      className={ cn(styles.button, className, {
        [styles.primary]: appearance == 'primary',
        [styles.ghost]: appearance == 'ghost'
      }) }
      { ...props }
    >
      { children }
      { arrow !== 'none' &&
      <span className={ cn(styles.arrow, {
        [styles.down]: arrow === 'down',
        [styles.right]: arrow === 'right'
      }) } />
      }
    </motion.button>
  );
};
