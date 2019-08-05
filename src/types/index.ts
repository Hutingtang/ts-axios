/*
 * @Description: 项目中的公共类型定义文件
 * @Author: Tang
 * @Date: 2019-08-02 13:55:08
 * @LastEditTime: 2019-08-05 16:41:58
 */
export type Method =
    'get' | 'GET' |
    'post' | 'POST' |
    'delete' | 'DELETE' |
    'put' | 'PUT'

export interface AxiosRequestConfig {
    url: string
    method?: Method
    data?: any
    params?: any
    headers?: any
    responseType?: XMLHttpRequestResponseType
}

export interface AxiosResponse<T = any> {
    data: any
    status: number
    statusText: string
    headers: any
    config: AxiosRequestConfig
    request: any
}
export interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> {

}