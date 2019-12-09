import React from 'react';
import { Provider } from "react-redux"
import ReactDOM from 'react-dom';
import store from "./store"
import App from "./App"
import {Loading} from "./components"

ReactDOM.render(
    <Provider store={store}>
        <Loading />
        <App />
    </Provider>,
    document.getElementById("root")
)