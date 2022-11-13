import { createStore } from "redux";
import rootReducer from "./redux/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./redux/sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
sagaMiddleware.run(rootSaga);

export default store;
