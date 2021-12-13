import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

import CactContext from './calc-context';

const CalcProvider = (props) => {
  const [currentVal, setCurrentVal] = useState('');
  const [prevdVal, setPrevdVal] = useState('');
  const [storedOperator, setStoredOperator] = useState('');
  const [currentOperation, setCurrentOperation] = useState('');
  const [result, setResult] = useState('');

  // Key click

  const numberClick = (num) => {
    if (currentVal.length >= 8) return;
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

  // Opertor click

  const operatorClick = (operator) => {
    if (result !== '') {
      setPrevdVal(result);
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
    }

    equalClick();
  };

  const compute = (a, b) => {
    let result;
    switch (storedOperator) {
      case '+':
        result = a + b;
        setResult(result.toString());
        break;
      case '-':
        result = a - b;
        setResult(result.toString());
        break;
      case 'x':
        result = a * b;
        setResult(result.toString());
        break;
      case '/':
        result = a / b;
        setResult(result.toString());
        break;
      default:
        return;
    }

    return result;
  };

  const equalClick = () => {
    const a = parseFloat(prevdVal);
    const b = parseFloat(currentVal);

    let result = compute(a, b);
  };

  const resetClick = () => {
    setCurrentVal('');
    setPrevdVal('');
    setStoredOperator('');
    setCurrentOperation('');
    setResult('');
  };

  const deleteClick = () => {
    setCurrentVal((prevState) => prevState.slice(0, -1));
  };

  useEffect(() => {}, [storedOperator]);

  return (
    <CactContext.Provider
      value={{
        currentVal,
        currentOperation,
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
