import React, { useContext } from 'react';

import CaclContext from '../../../store/calc-context';

import styles from './Button.module.css';

const Button = (props) => {
  const CalcCtx = useContext(CaclContext);

  const clickHandler = () => {
    switch (props.type) {
      case 'number':
        CalcCtx.numberClick(props.value);
        break;
      case 'operator':
        CalcCtx.operatorClick(props.value);
        break;
      case 'equal':
        CalcCtx.equalClick();
        break;
      case 'reset':
        CalcCtx.resetClick();
        break;
      case 'delete':
        CalcCtx.deleteClick();
        break;

      default:
        return;
    }
  };

  return (
    <button
      className={`${styles.btn} ${styles[`${props.name}`]}`}
      onClick={clickHandler}
    >
      {props.value}
    </button>
  );
};

export default Button;
