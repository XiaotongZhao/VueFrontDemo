/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.9.4.0 (NJsonSchema v10.3.1.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, CancelToken } from 'axios';

export class AuthenticateClient {
    private instance: AxiosInstance;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, instance?: AxiosInstance) {
        this.instance = instance ? instance : axios.create();
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "https://localhost:5080";
    }

    getUsers(  cancelToken?: CancelToken | undefined): Promise<UserViewModel[]> {
        let url_ = this.baseUrl + "/Authenticate/GetUsers";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <AxiosRequestConfig>{
            method: "GET",
            url: url_,
            headers: {
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processGetUsers(_response);
        });
    }

    protected processGetUsers(response: AxiosResponse): Promise<UserViewModel[]> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(UserViewModel.fromJS(item));
            }
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<UserViewModel[]>(<any>null);
    }

    requestToken(request: TokenRequest , cancelToken?: CancelToken | undefined): Promise<TokenResult> {
        let url_ = this.baseUrl + "/Authenticate/Request";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(request);

        let options_ = <AxiosRequestConfig>{
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            cancelToken
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processRequestToken(_response);
        });
    }

    protected processRequestToken(response: AxiosResponse): Promise<TokenResult> {
        const status = response.status;
        let _headers: any = {};
        if (response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = TokenResult.fromJS(resultData200);
            return result200;
        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<TokenResult>(<any>null);
    }
}

export abstract class BaseViewModelOfInteger implements IBaseViewModelOfInteger {
    id?: number;

    constructor(data?: IBaseViewModelOfInteger) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"] !== undefined ? _data["id"] : <any>null;
        }
    }

    static fromJS(data: any): BaseViewModelOfInteger {
        data = typeof data === 'object' ? data : {};
        throw new Error("The abstract class 'BaseViewModelOfInteger' cannot be instantiated.");
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id !== undefined ? this.id : <any>null;
        return data; 
    }
}

export interface IBaseViewModelOfInteger {
    id?: number;
}

export class UserViewModel extends BaseViewModelOfInteger implements IUserViewModel {
    name?: string | null;

    constructor(data?: IUserViewModel) {
        super(data);
    }

    init(_data?: any) {
        super.init(_data);
        if (_data) {
            this.name = _data["name"] !== undefined ? _data["name"] : <any>null;
        }
    }

    static fromJS(data: any): UserViewModel {
        data = typeof data === 'object' ? data : {};
        let result = new UserViewModel();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name !== undefined ? this.name : <any>null;
        super.toJSON(data);
        return data; 
    }
}

export interface IUserViewModel extends IBaseViewModelOfInteger {
    name?: string | null;
}

export class TokenResult implements ITokenResult {
    id?: number;
    userName?: string | null;
    password?: string | null;
    success?: boolean;
    token?: string | null;

    constructor(data?: ITokenResult) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"] !== undefined ? _data["id"] : <any>null;
            this.userName = _data["userName"] !== undefined ? _data["userName"] : <any>null;
            this.password = _data["password"] !== undefined ? _data["password"] : <any>null;
            this.success = _data["success"] !== undefined ? _data["success"] : <any>null;
            this.token = _data["token"] !== undefined ? _data["token"] : <any>null;
        }
    }

    static fromJS(data: any): TokenResult {
        data = typeof data === 'object' ? data : {};
        let result = new TokenResult();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id !== undefined ? this.id : <any>null;
        data["userName"] = this.userName !== undefined ? this.userName : <any>null;
        data["password"] = this.password !== undefined ? this.password : <any>null;
        data["success"] = this.success !== undefined ? this.success : <any>null;
        data["token"] = this.token !== undefined ? this.token : <any>null;
        return data; 
    }
}

export interface ITokenResult {
    id?: number;
    userName?: string | null;
    password?: string | null;
    success?: boolean;
    token?: string | null;
}

export class TokenRequest implements ITokenRequest {
    username?: string | null;
    password?: string | null;

    constructor(data?: ITokenRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.username = _data["username"] !== undefined ? _data["username"] : <any>null;
            this.password = _data["password"] !== undefined ? _data["password"] : <any>null;
        }
    }

    static fromJS(data: any): TokenRequest {
        data = typeof data === 'object' ? data : {};
        let result = new TokenRequest();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["username"] = this.username !== undefined ? this.username : <any>null;
        data["password"] = this.password !== undefined ? this.password : <any>null;
        return data; 
    }
}

export interface ITokenRequest {
    username?: string | null;
    password?: string | null;
}

export class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}

function isAxiosError(obj: any | undefined): obj is AxiosError {
    return obj && obj.isAxiosError === true;
}