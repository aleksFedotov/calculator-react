import React from 'react';

import ThemeSwitcher from './themeSwitcher/ThemeSwitcher';

import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <p>calc</p>
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
