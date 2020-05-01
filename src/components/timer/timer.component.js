import React, {useEffect, useState} from 'react';
import moment from 'moment';
import Moment from 'react-moment';
const Timer = () => {
    // var seconds = 3820;
    // var duration = moment.duration(seconds, 'seconds');
    // var formatted = duration.format("hh:mm:ss");
    // console.log(formatted);
    const [counter, setCounter] = useState(86400);
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);
    return (
        <div className="timer">
            <div>Countdown: {moment.duration(counter, 'seconds').format("hh:mm:ss")}</div>
        </div>
    );
};

export default Timer;
