import { API_DOMAIN, APP_CONFIG } from "@blogchain/constants";
import { Http } from "@blogchain/utils";
import { ObjectHelper, EnvHelper } from "@blogchain/help";

export function get(url, params, options) {
    return request(url, params, options);
}

export function post(url, params, options) {
    return request(url, params, options, 'POST');
}

export function create(url, params, options) {
    return post(url, params, options);
}

export function update(url, params, options) {
    return request(url, params, options, 'PUT');
}

export function remove(url, params, options) {
    return request(url, params, options, 'DELETE');
}

async function request(url, params, options, method = 'GET') {
    let optionsOverride = {
        method,
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...APP_CONFIG.headers
        }
    };

    optionsOverride = ObjectHelper.mergeDeep(optionsOverride, options);

    if (params) {
        if (method === 'GET') {
            url += '?' + objectToQueryString(params);
        } else {
            optionsOverride.body = JSON.stringify(params);
        }
    }

    if (EnvHelper.isDevelopment()) {
        console.log([ `[HTTP]: Complex query: ${url} with options`, optionsOverride ]);
    }

    const response = await fetch(API_DOMAIN + url, optionsOverride);
    const httpStatusCode = response.status;

    if (Http.isOk(httpStatusCode) === false) {
        return generateErrorResponse(httpStatusCode, 'The server responded with an unexpected status.')
    }

    const result = await response.json();

    // returns a single Promise object
    return {
        ...result,
        /**
         * HTTP status code use for automatic handle Error pages
         * @type {number}
         */
        status: true,
        statusCode: httpStatusCode
    };
}

export function authHeader(token) {
    return 'Bearer ' + token;
}

function generateErrorResponse(status, message) {
    return {
        statusCode: status,
        status: false,
        message: message
    };
}

function objectToQueryString(obj) {
    return Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
}