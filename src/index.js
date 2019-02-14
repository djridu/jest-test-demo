import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider, ReactReduxContext } from 'react-redux';
import App from './components/App';
import reducer from './reducers';
import 'todomvc-app-css/index.css';

const store = createStore(reducer);

const MOUNT_NODE = document.getElementById('app');

render(
    <Provider store={store} context={ReactReduxContext}>
        <App />
    </Provider>,
    MOUNT_NODE,
);
