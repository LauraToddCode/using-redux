import { combineReducers } from "redux";
import saveReducer from "./save/saveReducer";

const rootReducer = combineReducers({
    save: saveReducer
});

export default rootReducer;