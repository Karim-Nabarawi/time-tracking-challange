import { combineReducers } from "redux";
import periodReducer from "./periodReducer";

const rootReducer = combineReducers({
  period: periodReducer,
});

export default rootReducer;
