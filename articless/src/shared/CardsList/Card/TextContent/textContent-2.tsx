import React from 'react';
import styles from './textcontent.css';
import { Title } from './Title';

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img className={styles.avatar} src="https://cdn.dribbble.com/users/78433/avatars/mini/305e1c98dca8c28213f093b08aed255b.png?1544179193" alt="avatar" />
          <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          4 часа назад</span>
      </div>
      <Title />
    </div>
  );
}