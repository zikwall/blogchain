import { APP_CONFIG } from "@blogchain/constants";
import { EnvHelper, ObjectHelper } from "@blogchain/help";
import { Http } from "@blogchain/utils";

/**
 * The main method for implementing requests to the server
 * @param host
 * @param url
 * @param params
 * @param options
 * @param method
 * @param useDefaultHeaders
 */
export async function request(host, url, params, options, method = 'GET', useDefaultHeaders = true) {
    let optionsOverride = {
        method,
    };

    if (useDefaultHeaders) {
        optionsOverride = {
            ...optionsOverride, ...{
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    ...APP_CONFIG.headers
                }
            }
        };
    }

    optionsOverride = ObjectHelper.mergeDeep(optionsOverride, options);

    if (params) {
        if (method === 'GET') {
            url += '?' + objectToQueryString(params);
        } else {
            optionsOverride.body = params;
        }
    }

    if (EnvHelper.isDevelopment()) {
        console.log([`[HTTP]: Complex query: ${url} with options`, optionsOverride]);
    }

    const response = await fetch(host + url, optionsOverride);
    const httpStatusCode = response.status;
    const result = await response.json();

    if (Http.isOk(httpStatusCode) === false) {
        return generateErrorResponse(httpStatusCode, result.message || 'The server responded with an unexpected status.')
    }

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

/**
 * Returns the default structure for error handling
 * @param status
 * @param message
 * @returns {{message: *, statusCode: *, status: boolean}}
 */
function generateErrorResponse(status, message) {
    return {
        statusCode: status,
        status: false,
        message: message
    };
}

/**
 * Generates a get request string with parameters
 * @param obj
 */
function objectToQueryString(obj) {
    return Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
}