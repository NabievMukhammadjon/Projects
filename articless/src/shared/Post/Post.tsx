import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { CommentFormContainer } from '../CommentFormContainer';
import styles from './post.css';

export function Post() {
  const ref = useRef<HTMLDivElement>(null); 
  const nagivate = useNavigate();
   
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        nagivate('/posts');
      }
    }

    document.addEventListener('click', handleClick)
    
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, []);

  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return ReactDOM.createPortal((
    <div className={styles.modal} ref={ref}>
        <h2>Следует отметить, что новая модель организационной деятельности След</h2>
      
        <div className={styles.content}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptate inventore itaque porro quam ratione dignissimos excepturi corrupti enim ut, dolores ad. Accusamus facilis natus illum tenetur quos magnam fugit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptate inventore itaque porro quam ratione dignissimos excepturi corrupti enim ut, dolores ad. Accusamus facilis natus illum tenetur quos magnam fugit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas voluptate inventore itaque porro quam ratione dignissimos excepturi corrupti enim ut, dolores ad. Accusamus facilis natus illum tenetur quos magnam fugit.</p>
        </div>

        <CommentFormContainer />
    </div>
  ), node);
}
