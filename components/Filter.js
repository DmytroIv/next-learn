import { useReducer } from 'react';
import { useRouter } from 'next/router';
import { monthNames } from '@/helpers/helpers';

import styles from '@/styles/Filter.module.scss';

const SET_ERROR = 'SET_ERROR';
const SET_MONTH = 'SET_MONTH';
const SET_YEAR = 'SET_YEAR';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.error };
    case SET_MONTH:
      return { ...state, month: action.value, error: null };
    case SET_YEAR:
      return { ...state, year: action.value, error: null };
    default:
      throw state;
  }
};

const initialState = {};

const Filter = ({ dates }) => {
  const router = useRouter();
  const [state, dispatch] = useReducer(reducer, initialState);

  const selectHandler = (e) => {
    const { name, value } = e.target;
    dispatch({ type: `SET_${name.toUpperCase()}`, value });
  };

  const submitHandler = () => {
    if (!state.month || !state.year) {
      dispatch({ type: SET_ERROR, error: 'Please select year & month' });
    } else {
      router.push(`/events/${state.year}/${state.month}`);
    }
  };

  return (
    <div className={styles.filter}>
      <div className={styles.filterContent}>
        <label className={styles.control} htmlFor="month">
          <div className={styles.label}>Month:</div>
          <select onChange={selectHandler} name="month" id="month">
            <option>Please select month</option>
            {dates?.months &&
              dates.months.map((m, i) => (
                <option key={i} value={m}>
                  {monthNames[m]}
                </option>
              ))}
          </select>
        </label>
        <label className={styles.control} htmlFor="year">
          <div className={styles.label}>Year:</div>
          <select onChange={selectHandler} name="year" id="year">
            <option>Please select years</option>
            {dates?.years &&
              dates.years.map((y, i) => (
                <option key={i} value={y}>
                  {y}
                </option>
              ))}
          </select>
        </label>
        <button onClick={submitHandler} type="button">
          Find Events
        </button>
      </div>
      {state.error && <p className={styles.error}>{state.error}</p>}
    </div>
  );
};

export default Filter;
