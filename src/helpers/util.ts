const toString = Object.prototype.toString;
export function isDate(val: any): val is Date {
    // 判断是否是一个日期类型
    return toString.call(val) === '[object Date]'
}

export function isObject(val: any): val is Object {
    // 判断是否是一个对象
    return val !== null && typeof val === 'object';
}
// 判断是否是一个普通对象
export function isPlainObject(val: any): val is Object {
    return toString.call(val) === '[object Object]'
}