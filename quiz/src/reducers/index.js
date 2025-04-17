import { combineReducers } from "redux";

import loginReducer from "./login";
const allReducer = combineReducers({
    loginReducer,

    //thêm nhiều reducer ở đây
});
export default allReducer;