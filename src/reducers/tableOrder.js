const tableOrderReducer = (state = true, action) => {
    switch(action.payload) {
        case 'ASC':
            return !state;
        case 'DSC':
            return !state;
        default: 
            return state;
    }
}

export default tableOrderReducer;