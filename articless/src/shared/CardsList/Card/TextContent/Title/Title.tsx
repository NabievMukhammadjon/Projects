import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../../../../Post';
import styles from './title.css';

interface ITitleProps {
  cardId?: string;
  url?: string;
  title?: string;
}

export function Title({title, url, cardId}: ITitleProps) {
  // const [isModalOpened, setModalOpened] = useState(false);
  
  return (
    <h2 className={styles.title}>
        {/* <a href={url} className={styles.postLink} onClick={() => setModalOpened(true)}>
          {title}
        </a>
        
        {isModalOpened && (
          <Post onClose={() => setModalOpened(false)} />
        )} */}

        {/* <Link to='/posts/1' className={styles.postLink}> */}
        <Link to={`/posts/${cardId}`} className={styles.postLink}>
          {title}
        </Link>
    </h2>
  );
}
