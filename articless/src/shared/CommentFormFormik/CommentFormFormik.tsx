import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from './commentformformik.css';

export function CommentFormFormik() {
  function validateValue(value: string) {
    if (value.length <= 3) return 'Введите более 3-х символов';
    return '';
  }

  function handleSubmit(values: { textareaValue: string }, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) {
    setSubmitting(true);

    const valueError = validateValue(values.textareaValue);
    if (valueError) {
      console.log(valueError)
      alert('Форма содержит ошибки');
    } else {
      alert('Форма отправлена');
    }

    setSubmitting(false);
  
  }
  
  return (
    <Formik
      initialValues={{ textareaValue: '' }}
      onSubmit={handleSubmit}
      validate={(values) => {
        const errors: any = {};
        const valueError = validateValue(values.textareaValue);

        if (valueError) {
          errors.textareaValue = valueError;
        }

        return errors;
      }}
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <Field
            as="textarea"
            className={styles.input}
            name="textareaValue"
            // aria-invalid={touched && errors ? true : undefined}
            // aria-invalid={!!errors.textareaValue && touched.textareaValue ? true : undefined}
            aria-invalid={errors.textareaValue}
          />
          <ErrorMessage name="textareaValue" component="div" className={styles.error} />
          <button disabled={errors.textareaValue ? true : false} type='submit' className={styles.btn}>Комментировать</button>
        </Form>
      )}
    </Formik>
  );
}