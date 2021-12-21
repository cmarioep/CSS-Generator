import React from 'react';
import ReactDOM from 'react-dom';
import './styles/base.scss';
import App from './App';
import {Provider} from 'react-redux';
import store from './store/index';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
