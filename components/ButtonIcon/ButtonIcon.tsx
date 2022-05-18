import { IButtonIconProps, icons } from "./ButtonIcon.props";
import cn from 'classnames';
import styles from './ButtonIcon.module.css';

export const ButtonIcon = ({
                         appearance,
                         className,
                         onClick,
                         icon,
                         ...props
                       }: IButtonIconProps): JSX.Element => {

  return (
    <button
      onClick={ onClick }
      className={ cn(styles.button, className, styles[appearance]) }
      { ...props }
    >
      { icons[icon] }
    </button>
  );
};
