export const orderTableAscending = () => {
    return {
        type: "ASC",
    };
}

export const orderTableDescending = () => {
    return {
        type: "DSC",
    };
}

export const updateDateField = (category, filters) => {
    return {
        type: 'update',
        payload: {[category]: filters}
    }
}