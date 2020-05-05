import React, {useEffect, useState} from 'react';
import moment from 'moment';
import Moment from 'react-moment';

const Timer = (props) => {
    const [counter, setCounter] = useState(86400000);

    useEffect(() => {
        counter > 0  && setTimeout(() => setCounter(counter - 1000), 1000);
    }, [counter]);
    return (
        <div className="timer">
            <div>Countdown: {moment.duration(counter-props.startCounter, 'milliseconds').format('hh:mm:ss')}</div>
        </div>
    );
};

export default Timer;
