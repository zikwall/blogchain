import { API_DOMAIN } from "@blogchain/constants";
import { request } from "@blogchain/services/client/ClientImplementation";

/**
 * Implementing a request with the GET type
 * @param url
 * @param params
 * @param options
 * @returns {Promise<*>}
 */
export function get(url, params, options) {
    return request(API_DOMAIN, url, params, options);
}

/**
 * Implementing a request with the POST type
 * @param url
 * @param params
 * @param options
 * @param useDefaultHeaders
 * @returns {Promise<*>}
 */
export function post(url, params, options, useDefaultHeaders = true) {
    return request(API_DOMAIN, url, params, options, 'POST', useDefaultHeaders);
}

// jwt

/**
 * @param token
 * @returns {{headers: {Authorization: string}}}
 */
export function withRequestBearer(token) {
    return {
        headers: {
            Authorization: authHeader(token)
        }
    };
}

/**
 * @param token
 * @returns {string}
 */
export function authHeader(token) {
    return 'Bearer ' + token;
}