import React from 'react';

import styles from './Display.module.css';

const Display = () => {
  return (
    <div className={styles.display}>
      <p className={styles.previous_value}>342.34</p>
      <p className={styles.current_value}>23</p>
    </div>
  );
};

export default Display;
