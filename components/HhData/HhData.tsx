import { IHhDataProps } from "./HhData.props";
import { priceUA } from "../../helpers/helpers";
import { Card } from "../Card/Card";

import styles from './HhData.module.css';

export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: IHhDataProps): JSX.Element => {
  return (
    <div className={styles.hh}>
      <Card className={styles.count}>
        <div className={styles.title}>Vacancies at all</div>
        <div className={styles.countValue}>{count}</div>
      </Card>
      <Card className={styles.salary}>
        <div>
          <div className={styles.title}>Jun</div>
          <div className={styles.salaryValue}>{priceUA(juniorSalary)}</div>
          <div className={styles.rate}>
            <span className={styles.filled}>✪</span>
            <span>✪</span>
            <span>✪</span>
          </div>
        </div>
        <div>
          <div className={styles.title}>Middle</div>
          <div className={styles.salaryValue}>{priceUA(middleSalary)}</div>
          <div className={styles.rate}>
            <span className={styles.filled}>✪</span>
            <span className={styles.filled}>✪</span>
            <span>✪</span>
          </div>
        </div>
        <div>
          <div className={styles.title}>Senior</div>
          <div className={styles.salaryValue}>{priceUA(seniorSalary)}</div>
          <div className={styles.rate}>
            <span className={styles.filled}>✪</span>
            <span className={styles.filled}>✪</span>
            <span className={styles.filled}>✪</span>
          </div>
        </div>
      </Card>
    </div>
  );
};
