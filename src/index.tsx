import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./pages/App/App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store";
import thinkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();

export const createReduxStore = () =>
  createStore(rootReducer, applyMiddleware(thinkMiddleware, loggerMiddleware));

ReactDOM.render(
  <Provider store={createReduxStore()}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
registerServiceWorker();
