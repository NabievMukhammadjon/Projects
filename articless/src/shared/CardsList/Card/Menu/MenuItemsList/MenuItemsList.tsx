import React from 'react';
import { EColor, Text } from '../../../../Text'
import { Icons, EIcons } from '../../../../Icons';
import classNames from 'classnames';
import styles from './menuitemslist.css';

interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemsList({postId}: IMenuItemsListProps) {
  const classes = classNames(
    styles.menuItem,
    styles.ds,
  );

  return (
    <ul className={styles.menuItemsList}>
    <li className={classes}>
      <Icons name={EIcons.comment} size={16} />
      <Text size={12} color={EColor.grey99}>Комментарии</Text>
    </li>
    <li className={classes}>
      <Icons name={EIcons.shere} size={16} />
      <Text size={12} color={EColor.grey99}>Поделиться</Text>
    </li>
    <li className={styles.menuItem} onClick={() => console.log(postId)}>
      <Icons name={EIcons.block} size={16} />
      <Text size={12} color={EColor.grey99}>Скрыть</Text>
    </li>
    <li className={classes}>
      <Icons name={EIcons.save} size={16} />
      <Text size={12} color={EColor.grey99}>Сохранить</Text>
    </li>
    <div className={styles.divider} />
    <li className={styles.menuItem}>
      <Icons name={EIcons.warning} size={16} />
      <Text size={12} color={EColor.grey99}>Пожаловаться</Text>
    </li>
  </ul>
  );
}
