import _ from "lodash";

export const checkArraysEquality = (array1: any[], array2: any[]) => {

    if (array1.length != array2.length) return false;

    const dif1 = _.differenceWith(array1, array2, _.isEqual);
    const dif2 = _.differenceWith(array2, array1, _.isEqual);

    if (dif1.length || dif2.length) return false

    return true;
}