export const orderTable = (order) => {
    return {
        type: "Order",
        payload: order
    }
}

export const setTableData = (data) => {
    return {
        type: "Data",
        payload: data
    }
}

export const setSearchBy = (criteria) => {
    return {
        type: "Filter",
        payload: criteria
    }
}