import {formConstants} from '../_constants/form.constats';

export function form(state = {}, action) {
    switch (action.type) {

        case formConstants.POST_REQUEST:
            return {post: true};
        case formConstants.POST_SUCCESS:
            return {};
        case formConstants.POST_FAILURE:
            return {};
        case formConstants.CLEAR_FORM:
            return {};
        default:
            return state;
    }
}