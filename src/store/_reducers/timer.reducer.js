import {timerConstants} from '../_constants/timer.constants';

export function timer(state = {}, action) {
    switch (action.type) {
        case timerConstants.TIMER_REQUEST:
            return {
                loading: true
            };
        case timerConstants.TIMER_SUCCESS:
            return {
                timer: action.timer
            };

        case timerConstants.TIMER_FAILURE:
            return {
                error: action.error
            };


        default:
            return state;
    }
}