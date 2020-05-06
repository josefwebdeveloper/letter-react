import {articleConstants} from '../_constants/article.constants';
import {articleService} from '../../_services/article.service';


export const articleActions = {
    random,
    successVoice,
    errorVoice
};

function successVoice(voice) {
    return {type: articleConstants.VOICE_SUCCESS, voice};
}

function errorVoice(voice) {
    return {type: articleConstants.VOICE_FAILURE, voice};
}


function random() {
    return dispatch => {
        dispatch(request());
        articleService.getRandom()
            .then(
                article => dispatch(success(article.data.article[0])),
                error => dispatch(failure(error.toString()))
            );
    };



    function request() {
        return {type: articleConstants.RANDOM_REQUEST};
    }

    function success(article) {
        return {type: articleConstants.RANDOM_SUCCESS, article};
    }

    function failure(error) {
        return {type: articleConstants.RANDOM_FAILURE, error};
    }
}

