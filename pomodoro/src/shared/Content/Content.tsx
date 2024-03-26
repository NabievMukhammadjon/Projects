import React from 'react';
import { Timer } from '../Timer';
import styles from './content.css';
import { Body } from './Body';
import { TimerProvider } from '../context/TimerContext';

export function Content() {
  return (
    <div className={styles.content}>
      <TimerProvider>
        <Body />
        <Timer />
      </TimerProvider>
    </div>
  );
}
