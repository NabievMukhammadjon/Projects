import React from 'react';
import styles from './instructions.css';

export function Instructions() {
  return (
    <div className={styles.instructions}>
      <h2 className={styles.title}>Ура! Теперь можно начать работать:</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <span>
            Выберите категорию и напишите название текущей задачи
          </span>
        </li>
        <li className={styles.item}>
          <span>
            Запустите таймер («помидор»)
          </span>
        </li>
        <li className={styles.item}>
          <span>
            Работайте пока «помидор» не прозвонит
          </span>
        </li>
        <li className={styles.item}>
          <span>
            Сделайте короткий перерыв (3-5 минут)
          </span>
        </li>
        <li className={styles.item}>
          <span>
            Продолжайте работать «помидор» за «помидором», пока задача не будут выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут).
          </span>
        </li>
      </ul>
    </div>
  );
}
