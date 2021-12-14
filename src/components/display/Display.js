import React, { useContext } from 'react';

import CaclContext from '../../store/calc-context';

import styles from './Display.module.css';

const Display = () => {
  const { prevdVal, storedOperator, result, currentVal } =
    useContext(CaclContext);
  const currentOper = `${prevdVal.replace('.', ',')} ${storedOperator} ${
    result !== '' ? currentVal.replace('.', ',') : ''
  } ${result !== '' ? '=' : ''}`;

  return (
    <div className={styles.display}>
      <p className={styles.previous_value}>{currentOper}</p>
      <p className={styles.current_value}>
        {result !== ''
          ? result.replace('.', ',')
          : currentVal.replace('.', ',')}
      </p>
    </div>
  );
};

export default Display;
