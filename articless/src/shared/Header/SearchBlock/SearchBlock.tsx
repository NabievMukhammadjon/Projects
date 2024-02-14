import React, { useContext, useState } from 'react';
import { useUserData } from '../../../hooks/useUserData';
import { userContext, UserContextProvider } from '../../context/userContext';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';

export function SearchBlock() {
  const { data, loading } = useUserData()
  // const { data, loading } = useContext(userContext);
  // const userData = useContext(userContext)
  

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} loading={loading} />
      {/* <UserBlock avatarSrc={iconImg} username={name} /> */}
    </div>
  );
}
