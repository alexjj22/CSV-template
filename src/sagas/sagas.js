import {
    put,
    takeEvery,
    select
}                       from 'redux-saga/effects';
import { CSV_TEMPLATE } from '../constants/constants';
import {
    allowTableCreating,
    createTableFromTemplate,
    allowSorting,
    setSortValue
}                       from '../Store/actions';


const getStore = state => state;

export function* checkCsv({ meta }) {
    let store = yield select(getStore);
    const { templateValue } = meta;

    const {
        allowSort,
        tableCreatingPermission,
    } = store;

    const rowLength = templateValue.split('\n').length;
    const allowTableInit = rowLength >= 2;
    const sortPermission = rowLength >= 3;

    if( allowTableInit !== tableCreatingPermission ) {
        if (!allowTableInit) yield put( createTableFromTemplate(false) );
        yield put(allowTableCreating(allowTableInit));
    }

    if( sortPermission !== allowSort ) {
        if (!sortPermission) yield put( setSortValue('') );
        yield put( allowSorting(sortPermission) );
    }
}


export function* watchCsvValue() {
    yield takeEvery(CSV_TEMPLATE, checkCsv)
}