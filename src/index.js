import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store/index";

// import rootReducer from "./redux/reducers";

// import Layout from "./components/layout/Layout";
// import Navbar from "./components/navbar/Navbar";
import App from "./components/App";

// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <App />
    {/* <Layout /> */}
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// serviceWorker.unregister();

if (module.hot) {
  module.hot.accept();
}
