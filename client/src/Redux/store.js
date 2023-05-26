import authReducer from "./Reducers/authReducer";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import thunkMiddleware from "redux-thunk";
import { combineReducers } from "redux";
const reducers = combineReducers({
  auth: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
