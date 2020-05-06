import React, {forwardRef, useEffect, useImperativeHandle, useState} from 'react';
import moment from 'moment';
import Moment from 'react-moment';

const Timer = forwardRef((props, ref) => {
    const [counter, setCounter] = useState(86400000);
    let t;
    useImperativeHandle(ref, () => ({
        updateCounter() {
            clearTimeout(t);
            setCounter(86400000);
        }
    }));
    function setCounterTimeout (){
        t=setTimeout(() => setCounter(counter - 1000), 1000)
    }
    useEffect(() => {
        counter > 0 && setCounterTimeout();
    }, [counter]);
    return (
        <div className="timer">
            <div>Countdown: {moment.duration(counter - props.startCounter, 'milliseconds').format('hh:mm:ss')}</div>
        </div>
    );
});

export default Timer;
