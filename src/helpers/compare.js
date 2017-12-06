export function checkDate(str) {
    const dateRegex = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
    return dateRegex.test(str);
}

function numberCompare(a, b){
    return a - b;
}

function dateCompare(a, b) {
    const d1 = a.split('-');
    const d2 = b.split('-');

    return new Date(d1[0], d1[1], d1[2]) - new Date(d2[0], d2[1], d2[2]);
}

function stringCompare(a,b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
}


export function compare(a, b, compareField){
    if( !compareField ) return;

    const field_1 = Number(a[compareField]) ? Number(a[compareField]) : a[compareField];
    const field_2 = Number(b[compareField]) ? Number(b[compareField]) : b[compareField];

    const isNumber = typeof field_1 === 'number' && typeof field_2 === 'number';

    if( isNumber ){
        return numberCompare(field_1, field_2);
    }

    return checkDate(field_1) && checkDate(field_1) ? dateCompare(field_1, field_2) : stringCompare(field_1, field_2);


}