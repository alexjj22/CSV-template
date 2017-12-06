import {
    CREATE_TABLE_FROM_CSV,
    SET_SORT_ITEM,
    CSV_TEMPLATE,
    ALLOW_SORTING,
    ALLOW_TABLE_CREATING
} from '../constants/constants';


const initialState = {
    templateValue: '',
    sortValue: '',
    tableCreated: false,
    tableCreatingPermission: false,
    allowSort: false
};

export default function csvTemplate( state = initialState, { type, payload } = {} ) {
    switch (type) {
        case CREATE_TABLE_FROM_CSV:
        case SET_SORT_ITEM:
        case CSV_TEMPLATE:
        case ALLOW_SORTING:
        case ALLOW_TABLE_CREATING:
            return { ...state, ...payload };

        default:
            return state;
    }
}