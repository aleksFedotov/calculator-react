import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

import CactContext from './calc-context';

const CalcProvider = (props) => {
  const [currentVal, setCurrentVal] = useState('');
  const [prevdVal, setPrevdVal] = useState('');
  const [storedOperator, setStoredOperator] = useState('');
  const [result, setResult] = useState('');

  const compute = () => {
    const a = parseFloat(prevdVal);
    const b = parseFloat(currentVal);

    if (isNaN(a) || isNaN(b)) return;

    let result;
    switch (storedOperator) {
      case '+':
        result = a + b;

        break;
      case '-':
        result = a - b;

        break;
      case 'x':
        result = a * b;

        break;
      case '/':
        result = a / b;

        break;
      default:
        return;
    }

    return result.toString().slice(0, 14);
  };

  // Key

  const numberClick = (num) => {
    if (currentVal.length >= 12) return;
    if (result) {
      resetClick();
      setCurrentVal(num);
      return;
    }
    if (currentVal === '0' || currentVal === '') {
      if (num === '.') {
        setCurrentVal('0.');
        return;
      } else {
        setCurrentVal(num);
      }
    } else {
      if (num === '.' && currentVal.includes(num)) return;
      setCurrentVal((prevState) => prevState + num);
    }
  };

  // Opertor

  const operatorClick = (operator) => {
    if (result !== '') {
      setPrevdVal(result);
      setStoredOperator(operator);
      setCurrentVal('');
      setResult('');
      return;
    }
    if (prevdVal === '') {
      setPrevdVal(currentVal);
      setStoredOperator(operator);
      setCurrentVal('');
      return;
    }
    if (currentVal === '') {
      setStoredOperator(operator);

      setCurrentVal('');
      return;
    }

    const res = compute();
    setPrevdVal(res);
    setCurrentVal('');
    setStoredOperator(operator);
  };

  // Equal

  const equalClick = () => {
    let result = compute();
    setResult(result);
  };

  // Reset

  const resetClick = () => {
    setCurrentVal('');
    setPrevdVal('');
    setStoredOperator('');

    setResult('');
  };

  // Delete

  const deleteClick = () => {
    if (result) return;
    setCurrentVal((prevState) => prevState.slice(0, -1));
  };

  useEffect(() => {}, [storedOperator]);

  return (
    <CactContext.Provider
      value={{
        currentVal,
        storedOperator,
        prevdVal,
        result,
        numberClick,
        operatorClick,
        equalClick,
        resetClick,
        deleteClick,
      }}
    >
      {props.children}
    </CactContext.Provider>
  );
};

export default CalcProvider;
