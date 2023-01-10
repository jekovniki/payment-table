import { combineReducers } from "redux";

import tableOrderReducer from "../reducers/tableOrder";
import dataFilterReducer from "../reducers/dataFilter";
import addedFilterReducer from "../reducers/addedFilter";

const allReducers = combineReducers({
    tableOrder: tableOrderReducer,
    dataFilter: dataFilterReducer,
    searchFilter: addedFilterReducer
});

export default allReducers;