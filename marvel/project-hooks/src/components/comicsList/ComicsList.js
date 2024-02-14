import { useState, useEffect } from 'react';
import './comicsList.scss';
import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import { Link } from 'react-router-dom';

const ComicsList = () => {
    const [charList, setCharList] = useState([]);
    const [newComicsLoading, setNewComicsLoading] = useState(false);
    const [offset, setOffset] = useState(220);
    const [charEnded, setCharEnded] = useState(false);
    
    const {loading, error, getAllComics} = useMarvelService();
    
    useEffect(() => {
        onRequest(offset, true);
    }, []);

    const onRequest = (offset, initial) => {
        initial ? setNewComicsLoading(false) : setNewComicsLoading(true);
        getAllComics(offset)
            .then(onCharListLoaded)
    };

    const onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 8) {
            ended = true;
        }

        setCharList(charList => [...charList, ...newCharList])
        setNewComicsLoading(false);
        setOffset(offset => offset + 8);
        setCharEnded(charEnded => ended);
    }

    function renderItems(arr) {
        const items =  arr.map((item, i) => {
            return (
                <li 
                    className="comics__item"
                    key={i}>
                        <Link to={`/comics/${item.id}`}>
                            <img src={item.thumbnail} alt="ultimate war" className="comics__item-img"/>
                            <div className="comics__item-name">{item.title}</div>
                            <div className="comics__item-price">{item.price}</div>
                        </Link>
                </li>
            )
        });

        return (
            <ul className="comics__grid">
                {items}
            </ul>
        )
    }

    const items = renderItems(charList);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading && !newComicsLoading ? <Spinner/> : null;

    return (
        <div className="comics__list">
            {errorMessage}
            {spinner}
            {items}
            <button 
                className="button button__main button__long"
                disabled={newComicsLoading}
                onClick={() => onRequest(offset)}
                style={{'display': charEnded ? 'none' : 'block'}}
            >
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

// const View = () => {
//     return (
//         <ul className="comics__grid">
//             <li className="comics__item">
//                 <a href="#">
//                     <img src={uw} alt="ultimate war" className="comics__item-img"/>
//                     <div className="comics__item-name">ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</div>
//                     <div className="comics__item-price">9.99$</div>
//                 </a>
//             </li>
//         </ul>
//     )
// }

export default ComicsList;