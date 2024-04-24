const defaultState = {
    title: false,
}

const CHANGE_TITLE = 'CHANGE_TITLE'

export const TitleReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_TITLE:
            return {...state, title: action.payload}
        default:
            return state
    }
}

export const changeTitleAction = (payload) => ({type: CHANGE_TITLE, payload})