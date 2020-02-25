import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import todoReducer from './reducers/todoReducer';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";
import createTodoSaga from './sagas/createTodoSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(todoReducer, applyMiddleware(sagaMiddleware));


sagaMiddleware.run(createTodoSaga);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
