import { IHProps } from "./H.props";
import styles from './H.module.css';

export const H = ({ tag, children, ...props }: IHProps): JSX.Element => {

  switch (tag) {
    case "h1":
      return <h1 { ...props } className={ styles.h1 }>{ children }</h1>;
    case "h2":
      return <h2 { ...props } className={ styles.h2 }>{ children }</h2>;
    case "h3":
      return <h3 { ...props } className={ styles.h3 }>{ children }</h3>;
    case "h4":
      return <h4 { ...props } className={ styles.h4 }>{ children }</h4>;
    case "h5":
      return <h5 { ...props } className={ styles.h5 }>{ children }</h5>;
    default:
      return <div { ...props } className={ tag }>{ children }</div>;
  }
};
