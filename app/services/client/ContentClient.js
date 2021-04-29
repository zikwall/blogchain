import { BlogchainClient } from '@blogchain/services';
import { StringHelper } from "@blogchain/help";
import { withRequestBearer } from "@blogchain/services/client/BlogchainClient";

function withRequestCredentials(url, params, token) {
    return BlogchainClient.post(url, params, withRequestBearer(token), false)
}

export async function createContent(fields, token) {
    let response = await withRequestCredentials('/api/editor/content/add', fields, token);

    return onResolveResponse(response);
}

export async function updateContent(id, fields, token) {
    let response = await withRequestCredentials(`/api/editor/content/update/${id}`, fields, token);

    return onResolveResponse(response);
}

function onResolveResponse(response) {
    if (!!response && response.status !== 100) {
        return onSuccessResponse(response);
    }

    return onErrorResponse(response);
}

function onSuccessResponse(response) {
    return {
        ...response,
        status: true,
    }
}

function onErrorResponse(response) {
    return {
        status: false,
        message: response.message,
        content_id: 0
    }
}

// TODO need review

export async function contents(tag = null, page = 0) {
    let url = '/api/v1/contents';

    if (!!tag) {
        url = StringHelper.REST('/api/v1/tag', tag);
    }

    if (typeof page !== 'undefined' && page > 0) {
        url = StringHelper.REST(url, page);
    }

    return await BlogchainClient.get(url);
}

export async function content(id) {
    let url = StringHelper.REST('/api/v1/content', id);

    return BlogchainClient.get(url);
}

export async function own(id, token) {
    let url = StringHelper.REST('/api/editor/content', id);

    return BlogchainClient.get(url, null, withRequestBearer(token));
}

export async function userContents(id, page = 0) {
    let url = StringHelper.REST('/api/v1/contents/user', id);

    if (typeof page !== 'undefined' && page > 0) {
        url = StringHelper.REST(url, page);
    }

    return BlogchainClient.get(url);
}