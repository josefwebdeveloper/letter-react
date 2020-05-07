import React, {useEffect, useRef} from 'react';
import './home.style.scss';
import Message from '../message/message.components';
import Form from '../form/form.component';
import {useDispatch, useSelector} from 'react-redux';
import Timer from '../timer/timer.component';
import Footer from '../footer/footer.component';
import {timerActions} from '../../store/_actions/timer.action';

const Home = () => {
    // const [startCounter, setCounter] = useState(null);
    const startCounter = useSelector(state => state.timer);
    console.log(startCounter);
    const childRef = useRef();
    // const startCounter = useSelector(state => {
    //     console.log(state);
    //     const startTime = state.timer.data.timer[0].startTime;
    //     console.log(startTime);
    //     const now = new Date();
    //     console.log(now);
    //     const ms = moment(now,).diff(moment(startTime,));
    //     console.log(ms);
    //     const msf = 86400000 - ms;
    //     const d = moment.duration(msf);
    //     const s = d.format('hh:mm:ss');
    //     console.log(s);
    //     return s;
    // });
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(timerActions.successTimer());
        setInterval(() => dispatch(timerActions.successTimer()), 60000);
        // const timer = () => {
        //     timerService.getTimer().then((res) => {
        //         console.log(res);
        //         const startTime = res.data.timer[0].startTime;
        //         console.log(startTime);
        //         const now = new Date();
        //         console.log(now);
        //         const ms = moment(now,).diff(moment(startTime,));
        //         console.log(ms);
        //         const msf = 86400000 - ms;
        //         const d = moment.duration(msf);
        //         const s = d.format('hh:mm:ss');
        //         console.log(s);
        //         setCounter(ms);
        //     });
        // };
        // timer();
    }, []);
    const handleTimer = () => {
        console.log('handleTimer');
        dispatch(timerActions.successTimer());
        childRef.current.updateCounter();
    };

    return (
        <div>
            <div id='header' className='full-rotate'>
                <h1>This website will self destruct <span><Timer ref={childRef}
                                                                 startCounter={startCounter.timer}/></span></h1>

                <Message/>

            </div>
            <div id='header' className='full-rotate'>

                <Form handleTimer={handleTimer}/>

            </div>

            <div id='header' className='full-rotate'>

                <Footer/>
            </div>
        </div>
    );
};

export default Home;
