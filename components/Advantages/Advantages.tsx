import { IAdvantagesProps } from "./Advantages.props";

import styles from './Advantages.module.css';

export const Advantages = ({ advantages }: IAdvantagesProps): JSX.Element => {
  return (
    <>
      { advantages.map((a) => (
        <div className={ styles.advantage } key={ a._id }>
          <span className={styles.check}>✓</span>
          <div className={styles.title}>{a.title}</div>
          <hr className={styles.vline}/>
          <div className={styles.description}>{a.description}</div>
        </div>
      )) }
    </>
  );
};
