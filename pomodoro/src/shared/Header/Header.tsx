import React from 'react';
import { EqualizerIcon, TomatoIcon } from '../Icons/_icons';
import styles from './header.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>      
        <a href='#' className={styles.logo}>
          <TomatoIcon />
          <span>pomodoro_box</span>
        </a>
        <a href='#' className={styles.link}>
          <EqualizerIcon />
          <span>Статистика</span>
        </a>
      </div>
    </header>
  );
}
