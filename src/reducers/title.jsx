import { CHANGE_TITLE } from '../constants/actions';

export const title = (state = '', action) => {
    if (action.type === CHANGE_TITLE) {
        return action.title
    } else {
        return state
    }
}