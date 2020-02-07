let initialState = {
    content: {
        landings: [{
            id: '1',
            title: 'first'
        }, {
            id: '2',
            title: 'Second'
        } ]
    }
}

export const landingPageReducer = (state = initialState, action) => {
    return state;
}

export default landingPageReducer;