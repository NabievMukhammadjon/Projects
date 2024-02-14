import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Formik, Field, ErrorMessage, FormikValues, FormikHelpers, Form } from 'formik';
import * as Yup from 'yup';
import styles from './commentformformik.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, updateComment } from '../../store/reducer';

const validationSchema = Yup.object().shape({
  textareaValue: Yup.string()
    .required('Обязательное поле'),
});

export function CommentFormFormik() {
  // const value = useSelector<RootState, string>(state => state.commentText)
  // const dispatch = useDispatch();
  
  // function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
  //   dispatch(updateComment(event.target.value))
  // }

  // function validateValue(value: string) {
  //   if (value.length === 0) return 'Это поле обязательное для заполнения';
  //   if (value.length <= 3) return 'Введите более 3-х символов';
  //   return '';
  // }

  // 
  const initialValues: { textareaValue: string } = {
    textareaValue: '', // Начальное значение для поля textarea
  };
  
  const handleSubmit = (values: any) => {
    // Обработка отправки формы
    console.log(values);
    alert("Форма отправлена");
  };
  
  return (
    // <Formik
    //   initialValues={{comment: ''}}
    //   onSubmit={values => alert(`Ваш комментарий "${values.comment}" принят и будет добавлен псле проверки модератором`)}
    // >
    //   {({ errors, touched }) => (
    //     <Form className={styles.form}>
    //       <Field
    //         as="textarea"
    //         className={styles.input}
    //         name="comment"
    //         onChange={handleChange}
    //         value={value}
    //         validate={validateValue}
    //         aria-invalid={errors.comment ? 'true' : undefined}
    //       />
    //       {errors.comment && touched.comment && ( <div>{errors.comment}</div>)}
    //       <button type="submit" className={styles.btn}>Комментировать</button>
    //     </Form>
    //   )}
    // </Formik>
    
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="textareaValue">Текстовая область:</label>
            <Field
              as="textarea"
              id="textareaValue"
              name="textareaValue"
              onChange={handleChange}
              onBlur={handleBlur}
              className={styles.input}
              value={values.textareaValue}
            />
            {errors.textareaValue && touched.textareaValue && (
              <div>{errors.textareaValue}</div>
            )}
          </div>
          <button type="submit" className={styles.btn}>Комментировать</button>
        </form>
      )}
    </Formik>

    // <Formik
    //   initialValues={initialValues}
    //   validationSchema={validationSchema}
    //   onSubmit={handleSubmit}
    // >
    //   <form>
    //     <div>
    //       <label htmlFor="textareaValue">Текстовая область:</label>
    //       <Field as="textarea" id="textareaValue" name="textareaValue" />
    //       <ErrorMessage name="textareaValue" component="div" />
    //     </div>
    //     <button type="submit">Отправить</button>
    //   </form>
    // </Formik> 
  );
}
