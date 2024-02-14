import React from 'react';
import styles from './textcontent.css';
import { Title } from './Title';

interface ITextContentProps {
  cardId?: string,
  author?: string,
  title?: string,
  avatar?: string,
  url?: string,
}

export function TextContent({
  cardId,
  author,
  title,
  avatar,
  url
}: ITextContentProps) {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img className={styles.avatar} src={avatar} alt="avatar" />
          <a href="#user-url" className={styles.username}>{author}</a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>
          4 часа назад</span>
      </div>
      <Title cardId={cardId} url={url} title={title} />
    </div>
  );
}
