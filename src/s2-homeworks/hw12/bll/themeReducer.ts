const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: {type: string, id: number}): {themeId: number} => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): any => ({ type: 'SET_THEME_ID', id }) // fix any
