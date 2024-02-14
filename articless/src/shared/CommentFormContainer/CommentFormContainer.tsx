import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState, updateComment } from '../../store/reducer';
import { CommentForm } from '../CommentForm/CommentForm';
import { CommentFormFormik } from '../CommentFormFormik';
import styles from './commentformcontainer.css';

export function CommentFormContainer() {
  const value = useSelector<RootState, string>(state => state.commentText)
  const dispatch = useDispatch();

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value))
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <CommentFormFormik /> 
    // <CommentForm 
      // value={value}
      // onChange={handleChange}
      // onSubmit={handleSubmit}
    // />
  );
}

