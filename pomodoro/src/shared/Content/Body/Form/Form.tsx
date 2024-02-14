import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './form.css';

export function Form() {
  const [value, setValue] = useState('');

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function createNewTasks() {

  }

  return (
    <form className={styles.form}>
      <input 
        type="text" 
        placeholder='Название задачи' 
        value={value}
        className={styles.input} 
        onChange={handleChange} 
      />
      <button 
        type='submit'
        className={styles.button} 
        onClick={createNewTasks}
      >
        Добавить
      </button>
    </form>
  );
}
