import React, {useEffect} from 'react';
import './home.style.scss';
import Message from '../message/message.components';
import Form from '../form/form.component';
import {useDispatch, useSelector} from 'react-redux';
import {articleActions} from '../../store/_actions/article.actions';
import Timer from '../timer/timer.component';
import Footer from '../footer/footer.component';

const Home = () => {

    return (
        <div>
            <div id='header' className='full-rotate'>
                <h1>This website will self destruct <span><Timer/></span></h1>

                <Message/>

            </div>
            <div id='header' className='full-rotate'>

                <Form/>

            </div>

            <div id='header' className='full-rotate'>

                <Footer/>
            </div>
        </div>
    );
};

export default Home;
