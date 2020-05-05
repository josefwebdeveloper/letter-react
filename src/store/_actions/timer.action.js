import {timerConstants} from '../_constants/timer.constants';
// import {history} from '../history';
import {timerService} from '../../_services/timer.service';
import moment from 'moment';


export const timerActions = {
    successTimer
};

// function successVoice(timer) {
//     return {type: timerConstants., timer};
// }

function errorVoice(timer) {
    return {type: timerConstants.VOICE_FAILURE, timer};
}


function successTimer() {
    return dispatch => {
        dispatch(request());

        timerService.getTimer()
            .then(
                timer => {
                    console.log(timer);
                    const startTime = timer.data.timer[0].startTime;
                    console.log(startTime);
                    const now = new Date();
                    console.log(now);
                    const ms = moment(now,).diff(moment(startTime,));
                    return dispatch(success(ms));
                },
                error => dispatch(failure(error.toString()))
            );
    };

    function request() {
        return {type: timerConstants.TIMER_REQUEST};
    }

    function success(timer) {
        return {type: timerConstants.TIMER_SUCCESS, timer};
    }

    function failure(error) {
        return {type: timerConstants.TIMER_FAILURE, error};
    }
}

