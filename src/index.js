import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './Store/store';
import App2 from './App2';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App2 />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

