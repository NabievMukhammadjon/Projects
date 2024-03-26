import React, { ChangeEvent, FormEvent, useState } from 'react';
import { GenericList, IItem } from '../../../genericList/GenericList';
import styles from './form.css';

export function Form() {
  const [value, setValue] = useState('');
  const [tasks, setTasks] = useState<IItem[]>([]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function createNewTasks(e: FormEvent<HTMLFormElement>) {    
    e.preventDefault(); 
    
    const newTask = {
      id: Date.now().toString(),
      text: value,
    };
    
    setTasks([...tasks, newTask]);
    setValue('');
  }

  return (
   <>
      <form className={styles.form} onSubmit={createNewTasks}>
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
        >
          Добавить
        </button>
      </form>
      <ul className={styles.list}>
        <GenericList list={tasks} />
      </ul>
    </>
  );
}
