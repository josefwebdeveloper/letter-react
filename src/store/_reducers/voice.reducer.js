import {articleConstants} from '../_constants/article.constants';

export function voice(state = {}, action) {
    switch (action.type) {

        case articleConstants.VOICE_SUCCESS:
            return {
                voice: action.voice
            };

        case articleConstants.VOICE_FAILURE:
            return {
                error: action.error
            };

        default:
            return state;
    }
}