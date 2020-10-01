import { combineReducers } from "redux";
import auth from "./auth";
import post from "./post";
import posts from "./posts";
import boards from "./boards";
import petitions from "./petitions";
import petition from "./petition";

const rootReducer = combineReducers({
  auth,
  post,
  posts,
  boards,
  petitions,
  petition
});

export default rootReducer;
