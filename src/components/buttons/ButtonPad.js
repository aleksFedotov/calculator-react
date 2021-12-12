import React from 'react';

import styles from './ButtonPad.module.css';

import Button from './button/Button';

const ButtonPad = () => {
  return (
    <div className={styles.pad}>
      <Button name="one" placeholder="1" />
      <Button name="two" placeholder="2" />
      <Button name="three" placeholder="3" />
      <Button name="four" placeholder="4" />
      <Button name="five" placeholder="5" />
      <Button name="six" placeholder="6" />
      <Button name="seven" placeholder="7" />
      <Button name="eight" placeholder="8" />
      <Button name="nine" placeholder="9" />
      <Button name="zero" placeholder="0" />
      <Button name="decimal" placeholder="." />

      <Button name="add" placeholder="+" />
      <Button name="substract" placeholder="-" />
      <Button name="multiply" placeholder="x" />
      <Button name="divide" placeholder="/" />

      <Button name="equal" placeholder="=" />
      <Button name="reset" placeholder="reset" />
      <Button name="delete" placeholder="del" />
    </div>
  );
};

export default ButtonPad;
