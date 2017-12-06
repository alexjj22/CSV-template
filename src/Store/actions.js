import {
    CREATE_TABLE_FROM_CSV,
    SET_SORT_ITEM,
    CSV_TEMPLATE,
    ALLOW_SORTING,
    ALLOW_TABLE_CREATING
} from '../constants/constants';

export const setCsvTemplate = templateValue => {
    return {
        type: CSV_TEMPLATE,
        payload: {
            templateValue
        },
        meta: {
            templateValue
        }
    }
};

export const createTableFromTemplate = bool => {
    return {
        type: CREATE_TABLE_FROM_CSV,
        payload: {
            tableCreated: bool
        }
    }
};

export const setSortValue = sortValue => {
    return {
        type: SET_SORT_ITEM,
        payload: {
            sortValue
        }
    }
};

export const allowSorting = bool => {
    return {
        type: ALLOW_SORTING,
        payload: {
            allowSort: bool
        }
    }
};

export const allowTableCreating = bool => {
    return {
        type: ALLOW_TABLE_CREATING,
        payload: {
            tableCreatingPermission: bool
        }
    }
};