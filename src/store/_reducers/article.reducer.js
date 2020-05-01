import {articleConstants} from '../_constants/article.constants';

export function article(state = {}, action) {
    switch (action.type) {
        case articleConstants.RANDOM_REQUEST:
            return {
                loading: true
            };
        case articleConstants.RANDOM_SUCCESS:
            return {
                randomArticle: action.article
            };

        case articleConstants.RANDOM_FAILURE:
            return {
                error: action.error
            };


        case articleConstants.CLEAR_ARTICLE:
            return {};
        default:
            return state;
    }
}