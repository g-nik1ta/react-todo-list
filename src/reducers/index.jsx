import { title } from './title';

export const rootReducer = (state = {}, action) => {
    return {
        title: title(state.title, action)
    }
};