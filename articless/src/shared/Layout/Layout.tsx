import React from 'react';
import styles from './layout.css';

interface ILayuotProps {
  children ?: React.ReactNode;
}

export function Layout({children}: ILayuotProps) {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
}
