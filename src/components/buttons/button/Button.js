import React from 'react';

import styles from './Button.module.css';

const Button = (props) => {
  console.log(styles[`${props.name}`]);
  return (
    <button className={`${styles.btn} ${styles[`${props.name}`]}`}>
      {props.placeholder}
    </button>
  );
};

export default Button;
