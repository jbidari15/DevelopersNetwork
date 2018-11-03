import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});

export const getAuth = state => state.auth;
export const getErrors = state => state.errors;
export const getAuthentication = state => state.auth.isAuthenticated;
export const getUser = state => state.auth.user;
