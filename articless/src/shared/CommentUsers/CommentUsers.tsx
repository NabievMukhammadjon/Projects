import React, { useState } from 'react';
import { CommentIcon, ShereIcon, WarningIcon } from '../Icons/_icons';
import styles from './commentusers.css';

export function CommentUsers() {
  const [isCommentForm, setisCommentForm] = useState(false);

  return (
    <>
      <div className={styles.userComments}>
        <div className={styles.icons}>
          <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 0L0 10H19L9.5 0Z" fill="#D9D9D9"/>
          </svg>
          <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z" fill="#D9D9D9"/>
            </svg>
        </div>
        <div className={styles.user}>
          <div className={styles.metaData}>
            <div className={styles.userLink}>
              <img className={styles.avatar} src="https://cdn.dribbble.com/users/78433/avatars/mini/305e1c98dca8c28213f093b08aed255b.png?1544179193" alt="avatar" />
              <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
            </div>
            <span className={styles.createdAt}>4 часа назад</span>
          </div>
          <div className={styles.league}>
            <button className={styles.league__btn}>Лига консультантов</button>
          </div>
          <p className={styles.descr}>
            Сторонники тоталитаризма в науке будут объективно рассмотрены соответствующими инстанциями. Лишь реплицированные с зарубежных источников, современные исследования будут описаны максимально подробно. 
          </p>
          <div className={styles.buttons}>
            <button className={styles.button} onClick={() => setisCommentForm(true)}>
              <CommentIcon />
              <span>Ответить</span>
            </button>
            <button className={styles.button}>
              <ShereIcon />
              <span>Поделиться</span>
            </button>
            <button className={styles.button}>
              <WarningIcon />
              <span>Пожаловаться</span>
            </button>
          </div>

          {isCommentForm && (
            // <CommentForm userName={'Дмитрий Гришин'} />
            <div>Здесь должна была быть поле ввода</div>
          )}


        </div>
      </div>
    </>
  );
}
