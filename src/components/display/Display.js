import React from 'react';

import styles from './Display.module.css';

const Display = () => {
  return (
    <div className={styles.display}>
      <p className={styles.previous_value}></p>
      <p className={styles.current_value}>399,981</p>
    </div>
  );
};

export default Display;
