import { createStore, applyMiddleware } from "redux";
import { connectRouter, routerMiddleware  } from "connected-react-router";
import thunk from "redux-thunk";

import history from "../routes/history";

const middlewares = [thunk, routerMiddleware(history)];

const store = createStore(
    connectRouter(history)(() => {}),
    applyMiddleware(...middlewares)
);

//old
//const store = createStore(() => {}, applyMiddleware(thunk))



export default store;