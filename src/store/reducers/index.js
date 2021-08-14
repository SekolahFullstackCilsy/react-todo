import todoReducer from "./todo";
import userReducer from "./user";
// import authReducer from "./todo";
import { combineReducers } from "redux";

export default combineReducers({todoReducer, userReducer })