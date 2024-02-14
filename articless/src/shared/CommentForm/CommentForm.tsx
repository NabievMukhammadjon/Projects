import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './commentform.css';

export function CommentForm() {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);
  const [valueError, setValueErrer] = useState('');
  
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setTouched(true);

    setValueErrer(validateValue())

    const ifFormValid = !validateValue();

    if (! ifFormValid) return;

    alert("Форма отправлена");
  }

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setValue(e.target.value);
  }

  function validateValue() {
    if (value.length <= 3) return 'Введите более 3-х символов';
    return '';
  }
  
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea 
        className={styles.input} 
        value={value} 
        onChange={handleChange} 
        aria-invalid={valueError ? true : undefined}
      />
      {touched && valueError && (<div>{valueError}</div>)}
      <button type='submit' className={styles.btn}>Комментировать</button>
    </form>
  );
}
