import React, { useState } from 'react';
import styles from './menuitemslist.css';

export function MenuItemsList() {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem}>
        {/* <BlockIcon /> */}
        {/* <Text size={12} color={EColor.grey99}>Скрыть</Text> */}
      </li>
      <div className={styles.divider} />
      <li className={styles.menuItem}>
        {/* <WarningIcon /> */}
        {/* <Text size={12} color={EColor.grey99}>Пожаловаться</Text> */}
      </li>
    </ul>
  );
}
