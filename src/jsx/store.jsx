// src/redux/store.js
import { createStore } from 'redux';
import Cbm from './Cbm';

const store = createStore(
    Cbm,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
