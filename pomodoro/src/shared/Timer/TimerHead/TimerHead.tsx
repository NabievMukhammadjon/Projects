import React from 'react';
import styles from './timerhead.css';

export function TimerHead() {
  return (
    <div className={styles.head}>
      <h3 className={styles.title}>Сверстать сайт</h3>
      <div className={styles.count}>
        Помидор 2
      </div>
    </div>
  );
}
