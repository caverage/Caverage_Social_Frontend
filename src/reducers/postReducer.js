import { FETCH_POSTS, NEW_POST } from '../actions/types';
import { bindActionCreators } from '../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';

const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
}