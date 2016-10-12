import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { hashHistory } from 'react-router';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

const store = createStore(reducer, {}, compose(
  applyMiddleware(
    thunk,
    promiseMiddleware(),
    routerMiddleware(hashHistory)
  ),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;
