import {articleConstants} from '../_constants/article.constants';


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



