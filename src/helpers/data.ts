/* 处理data数据 请求和响应 */
import { isPlainObject } from './util'
export function transformRequest(data: any): any {
    // 普通对象
    if (isPlainObject(data)) {
        return JSON.stringify(data);
    }
    return data;

}

// 处理返回的data
export function transformResponse(data: any): any {
    if (typeof data === 'string') {
        try {
            data = JSON.parse(data);
        } catch (error) {
            console.error(error);
        }
    }
    return data;
}