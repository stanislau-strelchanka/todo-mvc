import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux'
import './index.css';
import App from './presentational/App';
import {todos} from "./reducer/todos";
import {visibilityFilter} from "./reducer/visibilityFilter";

const rootReducer = combineReducers({
    todos: todos,
    visibilityFilter: visibilityFilter,
});

const store = createStore(rootReducer);

ReactDOM.render(<App store={store} />, document.getElementById('root'));