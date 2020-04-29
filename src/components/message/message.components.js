import React, {useEffect} from 'react';
import './message.style.scss';
import {useDispatch, useSelector} from 'react-redux';
import {articleActions} from '../../store/_actions/article.actions';

const Message = () => {
    const randomArticle = useSelector(state => state.article);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(articleActions.random());
        // eslint-disable-next-line
    }, []);
    return (
        <div id='message'>
            <div className="border border-1 child-borders">
                <h1 className="full-rotate">Hello, world!</h1>
                <div className=" full-rotate ">
                    {randomArticle.loading && <em>Loading random-article...</em>}
                    {randomArticle.error && <span className="text-danger">ERROR: {randomArticle.error}</span>}
                    {randomArticle.randomArticle &&
                    <p>{randomArticle.randomArticle.article}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Message;
