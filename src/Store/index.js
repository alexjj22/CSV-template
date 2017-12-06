import {
    createStore,
    applyMiddleware,
    combineReducers }       from 'redux';
import createSagaMiddleware from 'redux-saga'
import logger               from '../Middleware/logger';
import csvTemplate          from './reducers';
import { watchCsvValue }    from '../sagas/sagas'

const sagaMiddleware = createSagaMiddleware();

// const reducer = combineReducers({
//     csvTemplate
// });

const store = createStore(csvTemplate, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(watchCsvValue);

export default store;