import React from 'react';
import { Timer } from '../Timer';
import styles from './content.css';
import { Body } from './Body';

export function Content() {
  return (
    <div className={styles.content}>
      <Body />
      <Timer />
    </div>
  );
}
