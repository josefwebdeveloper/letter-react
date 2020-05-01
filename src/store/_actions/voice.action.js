import {articleConstants} from '../_constants/article.constants';
import {history} from '../history';
// import {articleService} from '../../_services/article.service';


export const voiceAction = {
    successVoice,
    errorVoice,
};

function successVoice(voice) {
    return {type: articleConstants.VOICE_SUCCESS, voice};
}

function errorVoice(voice) {
    return {type: articleConstants.VOICE_FAILURE, voice};
}



