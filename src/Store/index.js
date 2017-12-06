import {
    createStore,
    applyMiddleware }       from 'redux';
import createSagaMiddleware from 'redux-saga'
// import logger               from '../Middleware/logger';
import reducer              from './reducers';
import { watchCsvValue }    from '../sagas/sagas'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchCsvValue);

export default store;