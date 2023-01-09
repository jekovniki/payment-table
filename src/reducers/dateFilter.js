const dateFilterReducer = (state = true, action) => {
    switch(action.type) {
        case 'ASC':
            return !state;
        case 'DSC':
            return !state;
        default: 
            return null;
    }
}

export default dateFilterReducer;