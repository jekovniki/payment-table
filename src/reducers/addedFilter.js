const addedFilterReducer = (state = "id", action) => {
    switch(action.type) {
        case 'Search':
            return action.payload;
        default: 
            return state;
    }
}

export default addedFilterReducer;