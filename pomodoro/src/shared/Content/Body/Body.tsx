import React from 'react';
import styles from './body.css';
import { Form } from './Form';
import { Instructions } from './Instructions';


export function Body() {
  return (
    <div className={styles.body}>
      <Instructions />
      <Form />
    </div>
  )
}
