import {combineReducers} from 'redux';

import {article} from './article.reducer';
import {form} from './form.reducer';
import {voice} from './voice.reducer';

const rootReducer = combineReducers({
    article,
    form,
    voice
});

export default rootReducer;