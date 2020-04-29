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
        case articleConstants.POST_REQUEST:
            return {post: true};
        case articleConstants.POST_SUCCESS:
            return {};
        case articleConstants.POST_FAILURE:
            return {};
        default:
            return state;
    }
}