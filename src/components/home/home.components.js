import React from 'react';
import './home.style.scss';
import Message from '../message/message.components';

const Home = () => {
    return (
        <div>
            <div id='header' className='full-rotate'>
                <h1>This website will self destruct</h1>
                <Message/>
            </div>
        </div>
    );
};

export default Home;
