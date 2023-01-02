import tableOrderReducer from "../reducers/tableOrder";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    tableOrder: tableOrderReducer
});

export default allReducers;