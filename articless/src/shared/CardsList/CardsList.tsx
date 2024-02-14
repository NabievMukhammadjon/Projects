import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Card } from "./Card/Card";
import styles from './cardslist.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import { Outlet } from 'react-router-dom';

export function CardsList() {
  const token = useSelector<RootState>(state => state.token)
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState('');
  const [nextAfter, setNextAfter] = useState('');
  const [btnDownloadMore, setBtnDownloadMore] = useState(false);
  const [count, setCount] = useState(0);

  const bottomOfList = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!token  || token === 'undefined' ) return;
    
    async function load () {
      setLoading(true);
      setErrorLoading('');

      try {
        if (!btnDownloadMore) {
          const {data: { data: { after, children }}} = await axios.get('https://oauth.reddit.com/best.json?sr_detail=true', {
            headers: { Authorization: `bearer ${token}` },
            params: {
              limit: 10,
              after: nextAfter,
            }
          });

          const postsArray = children.map((info: any) => {
            return {
              id: info.data.id,
              author: info.data.author,
              title: info.data.title,
              rating: info.data.rating,
              subreddit: info.data.subreddit,
              avatar: info.data.sr_detail.icon_img
                ? info.data.sr_detail.icon_img
                : 'https://img.freepik.com/free-photo/3d-rendering-of-zoom-call-avatar_23-2149556785.jpg?w=740&t=st=1698861239~exp=1698861839~hmac=50d6045972f5c96d69c2d071ffc501e652871e40ccdcabf0e9df2641ab1fade6',
              previewImg: info.data.preview
                ? info.data.preview.images?.[0].source.url.replace(
                    /\&amp\;/g,
                    '&'
                )
                : 'https://jjji.ru/400x150',
              dataPostUtc: info.data.created_utc
    
            }
          });
          
          setNextAfter(after);
          setPosts(prevChildren => prevChildren.concat(...postsArray)); 
          
          setCount(count + 1);
          if (count !== 0 && (count + 1) % 3 === 0) {
            setBtnDownloadMore(true);
            setCount(0);
          }
        }   
      } catch (error) {
        setErrorLoading(String(error));
      }
      setLoading(false);
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        load();
      }
    }, {
      rootMargin: '100px',
    })

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current) 
    }
    
    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current) 
      }
    }
  }, [bottomOfList.current, nextAfter, token, count, btnDownloadMore]);

  return (
    <>
      <ul className={styles.cardsList}>
        {posts.length === 0 && !loading && !errorLoading && (
          <div style={{textAlign: 'center'}}>Нет ни одного поста</div>
        )}

        {posts.map(post => (
          <Card
            key={post.id + Math.random()}
            cardId={post.id}
            author={post.author}
            title={post.title}
            rating={post.rating}
            avatar={post.avatar}
            previewImg={post.previewImg}
            url={post.url}
            
          />
        ))}
        
          <div ref={bottomOfList}></div>

        {loading && (
          <div style={{textAlign: 'center'}}>Загрузка...</div>
        )}

        {btnDownloadMore && (
          <div style={{textAlign: 'center'}} >
            <button 
              onClick={() => setBtnDownloadMore(false)} 
              className={styles.button}
            >Загрузить ещё</button>
          </div>
        )}

        {errorLoading && (
          <div role='alert' style={{textAlign: 'center', color: 'red'}}>
            {errorLoading}
          </div>
        )}
      </ul>
      <Outlet />
    </>
  );
}
