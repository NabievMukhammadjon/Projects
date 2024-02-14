import React from 'react';
import { TimerProvider } from '../context/TimerContext';
import styles from './timer.css';
import { TimerHead } from './TimerHead';
import { TimerInner } from './TimerInner';

export function Timer() {
  return (
    <div className={styles.timer}>
      <TimerHead />
      <TimerProvider>
        <TimerInner />
      </TimerProvider>
    </div>
  );
}
