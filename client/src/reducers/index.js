import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer
});

export const getErrors = state => state.errors;
export const getAuthentication = state => state.auth.isAuthenticated;
export const getUser = state => state.auth.user;

export const getProfile = state => state.profile.profile;
export const getProfilesState = state => state.profile.profiles;
export const getLoader = state => state.profile.loading;
