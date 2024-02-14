import React from 'react';
import styles from './page404.css';

export function Page404() {
  return (
    <div>
      <strong className={styles.title}>404</strong>
      <p className={styles.descr}>Oops! Something went wrong. The page you are looking for was not found. please return to the main page.</p>
    </div>
  );
}
