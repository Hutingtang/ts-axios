import { isPlainObject } from "./util";

// 头部请求处理
// 规范化headers字段
function normalizeHeaderName(headers: any, normalizeName: string): void {
    //
    if (!headers) {
        return
    }
    Object.keys(headers).forEach((name) => {
        if (name !== normalizeName && name.toUpperCase() === normalizeName.toUpperCase()) {
            headers[normalizeName] = headers[name];
            delete headers[name];
        }
    })
}
export function processHeaders(headers: any, data: any): any {
    normalizeHeaderName(headers, 'Content-Type');
    if (isPlainObject(data)) {
        if (headers && headers['Content-Type']) {
            headers['Content-Type'] = 'application/json;charset=uft-8'
        }
    }
    return headers
}

// 解析header
export function parseHeaders(headers: string): any {
    let parsed = Object.create(null);
    if (!headers) {
        return parsed
    }
    headers.split('\r\n').forEach((line) => {
        let [key, val] = line.split(':');
        key = key.trim().toLowerCase();
        if (!key) {
            return
        }
        if (val) {
            val = val.trim();
        }
        parsed[key] = val;
    })
    return parsed;
}