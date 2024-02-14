import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";

export function usePostsData() {
    const [posts, setPosts] = useState([]);

    const token = useSelector<RootState>(state => state.token);
    // console.log(token + ' 12')
    useEffect(() => {
        if (!token || token === 'undefined') return;

        axios.get('https://oauth.reddit.com/best.json?sr_detail=true', {
          headers: {Authorization: `bearer ${token}`}
        })
          .then((resp) => {
            const data = resp.data.data.children;
            const postsArray = data.map((data: {data: any}) => ({
              id: data.data.id,
              author: data.data.author,
              title: data.data.title,
              rating: data.data.rating,
              subreddit: data.data.subreddit,
              avatar: data.data.sr_detail.icon_img
                ? data.data.sr_detail.icon_img
                : 'https://img.freepik.com/free-photo/3d-rendering-of-zoom-call-avatar_23-2149556785.jpg?w=740&t=st=1698861239~exp=1698861839~hmac=50d6045972f5c96d69c2d071ffc501e652871e40ccdcabf0e9df2641ab1fade6',
              previewImg: data.data.preview
                ? data.data.preview.images?.[0].source.url.replace(
                    /\&amp\;/g,
                    '&'
                )
                : 'https://jjji.ru/400x150',
              dataPostUtc: data.data.created_utc
            }));

            setPosts(postsArray);
            console.log('Ответ получен в usePostsDates');
          })
          .catch(console.log)
      }, [token])
      return [posts];
}