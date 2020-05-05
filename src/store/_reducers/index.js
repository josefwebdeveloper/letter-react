import {combineReducers} from 'redux';

import {article} from './article.reducer';
import {form} from './form.reducer';
import {voice} from './voice.reducer';
import {timer} from './timer.reducer';

const rootReducer = combineReducers({
    article,
    form,
    voice,
    timer
});

export default rootReducer;