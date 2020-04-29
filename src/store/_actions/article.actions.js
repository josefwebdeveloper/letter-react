import {articleConstants} from '../_constants/article.constants';
import {history} from '../history';
import {articleService} from '../../_services/article.service';


export const articleActions = {
    random,
    postArticle
};

function postArticle(article) {
    return dispatch => {
        dispatch(request(article));

        articleService.createArticle(article)
            .then(
                article => {
                    dispatch(success());
                    history.push('/article');
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(article) {
        return {type: articleConstants.POST_REQUEST, article};
    }

    function success(article) {
        return {type: articleConstants.POST_SUCCESS, article};
    }

    function failure(error) {
        return {type: articleConstants.POST_FAILURE, error};
    }
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

