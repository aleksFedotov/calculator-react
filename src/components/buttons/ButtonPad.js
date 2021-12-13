import React from 'react';

import styles from './ButtonPad.module.css';

import Button from './button/Button';

const ButtonPad = () => {
  return (
    <div className={styles.pad}>
      <Button name="one" value="1" type="number" />
      <Button name="two" value="2" type="number" />
      <Button name="three" value="3" type="number" />
      <Button name="four" value="4" type="number" />
      <Button name="five" value="5" type="number" />
      <Button name="six" value="6" type="number" />
      <Button name="seven" value="7" type="number" />
      <Button name="eight" value="8" type="number" />
      <Button name="nine" value="9" type="number" />
      <Button name="zero" value="0" type="number" />
      <Button name="decimal" value="." type="number" />

      <Button name="add" value="+" type="operator" />
      <Button name="substract" value="-" type="operator" />
      <Button name="multiply" value="x" type="operator" />
      <Button name="divide" value="/" type="operator" />

      <Button name="equal" value="=" type="equal" />
      <Button name="reset" value="reset" type="reset" />
      <Button name="delete" value="del" type="delete" />
    </div>
  );
};

export default ButtonPad;
