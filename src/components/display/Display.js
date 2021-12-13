import React, { useContext } from 'react';

import CaclContext from '../../store/calc-context';

import styles from './Display.module.css';

const Display = () => {
  const { prevdVal, storedOperator, result, currentVal } =
    useContext(CaclContext);
  const currentOper = `${prevdVal} ${storedOperator} ${
    result !== '' ? currentVal : ''
  } ${result !== '' ? '=' : ''}`;

  return (
    <div className={styles.display}>
      <p className={styles.previous_value}>{currentOper}</p>
      <p className={styles.current_value}>
        {result !== '' ? result : currentVal}
      </p>
    </div>
  );
};

export default Display;
