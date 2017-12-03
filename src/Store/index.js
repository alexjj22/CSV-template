import {createStore, applyMiddleware, combineReducers} from 'redux'

import logger from 'redux-logger'

import csvTemplate from '../Containers/CsvTemplate/reducers'


const reducer = combineReducers({
    csvTemplate
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;