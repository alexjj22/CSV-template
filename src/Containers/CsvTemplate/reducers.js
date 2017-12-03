import { CSV_TEMPLATE } from './constants';

const initialState = {
    csvTemplate: ''
};

export default function csvTemplate( state = initialState, { type, payload } = {} ) {
    switch (type) {
        case CSV_TEMPLATE:
            return { ...state, ...payload };

        default:
            return state;
    }
}