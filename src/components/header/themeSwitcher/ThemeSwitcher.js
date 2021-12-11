import React from 'react';

import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  const themeChangeHandler = (event) => {
    const theme = `theme-${event.target.innerText}`;

    const root = document.querySelector(':root');
    const slider = document.querySelector('#slider');

    root.className = theme;
    slider.className = `${styles.slider} ${styles[`${theme}`]}`;
  };

  return (
    <div className={styles.switcher}>
      <p>theme</p>
      <div className={styles.themes}>
        <div>
          <button onClick={themeChangeHandler} className={styles.theme_btn}>
            1
          </button>
          <button onClick={themeChangeHandler} className={styles.theme_btn}>
            2
          </button>
          <button onClick={themeChangeHandler} className={styles.theme_btn}>
            3
          </button>
        </div>
        <span id="slider" className={styles.slider}></span>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
