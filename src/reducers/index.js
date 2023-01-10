import { combineReducers } from "redux";

import tableOrderReducer from "../reducers/tableOrder";
import dataFilterReducer from "../reducers/dataFilter";

const allReducers = combineReducers({
    tableOrder: tableOrderReducer,
    dataFilter: dataFilterReducer
});

export default allReducers;