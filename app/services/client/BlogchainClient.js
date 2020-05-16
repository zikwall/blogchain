import { API_DOMAIN } from "@blogchain/constants";
import { Http } from "@blogchain/utils";
import { ObjectHelper } from "@blogchain/help";

export function get(url, params, options) {
    let headers = {
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };

    let optionsOverride = ObjectHelper.mergeDeep(headers, options);

    return request(url, params, optionsOverride);
}

export function create(url, params, options) {
    return request(url, params, options, 'POST');
}

export function update(url, params, options) {
    return request(url, params, options, 'PUT');
}

export function remove(url, params, options) {
    return request(url, params, options, 'DELETE');
}

async function request(url, params, options, method = 'GET') {

    const optionsOverride = {
        method,
        ...options
    };

    if (params) {
        if (method === 'GET') {
            url += '?' + objectToQueryString(params);
        } else {
            options.body = JSON.stringify(params);
        }
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