import {history} from '../history';
import {articleService} from '../../_services/article.service';
import {formConstants} from '../_constants/form.constats';

export const formActions = {
    postArticle
};

function postArticle(article) {
    return dispatch => {
        dispatch(request(article));

        articleService.createArticle(article)
            .then(
                article => {
                    dispatch(success(article));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(article) {
        return {type: formConstants.POST_REQUEST, article};
    }

    function success(article) {
        return {type: formConstants.POST_SUCCESS, article};
    }

    function failure(error) {
        return {type: formConstants.POST_FAILURE, error};
    }
}



