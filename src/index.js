import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { UserReducer } from "./redux/reducer";

const middleware = [thunk];

const rootReducer = combineReducers({
  users: UserReducer,
});

const store = createStore(rootReducer, applyMiddleware(...middleware));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
