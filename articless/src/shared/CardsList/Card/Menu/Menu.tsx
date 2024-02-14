import React from 'react';
import { Dropdown } from '../../../Dropdown';
import { MenuIcon } from '../../../Icons/_icons';
import styles from './menu.css';

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            <MenuIcon />
          </button>
        }
      />
      {/* <Dropdown /> */}
      {/* <div className={styles.menuList}></div> */}
    </div>
  );
}
