import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer,updateReducer } from "../reducers";



declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;;

const reducers = combineReducers({
    auth:authReducer,
    update:updateReducer
});

export const store= createStore(reducers,composeEnhancers(applyMiddleware(thunk)));
export type RootState=ReturnType<typeof reducers>