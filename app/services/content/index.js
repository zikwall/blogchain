/**
 * THIS ALL IS DEPRECATED!
 * TODO REMOVE ALL
 */

import { apiFetch, apiPost } from "../api";
import { BlogchainClient } from "@blogchain/services";

async function withRequestCredentials(url, params, token) {
    return BlogchainClient.post(url, params, {
        "Authorization": "Bearer " + token
    })
}

async function createContent(fields, token) {
   let response = await withRequestCredentials('/api/editor/content/add', fields, token);
   
   return onResolveResponse(response);
}

async function updateContent(id, fields, token) {
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
        status: false,
        message: response.message,
    }
}

function onErrorResponse(response) {
    return {
        ...response,
        status: true,
    }
}

const MakeDMLRequest = (url, fields, token) => {
    return apiPost(url, {
        method: 'POST',
        body: fields,
        headers: {
            "Authorization": "Bearer " + token
        }
    })
};

export const CreateContent = (fields, token) => {
    return MakeDMLRequest("/api/editor/content/add", fields, token).then((res) => {
        if (res.status === 100) {
            return {
                status: false,
                message: res.message,
                content_id: 0
            }
        }

        return {
            status: true,
            message: res.message,
            content_id: res.content_id
        }
    })
};

export const UpdateContent = (id, fields, token) => {
    return MakeDMLRequest(`/api/editor/content/update/${id}`, fields, token).then((res) => {
        if (res.status === 100) {
            return {
                status: false,
                message: res.message,
                content_id: 0
            }
        }

        return {
            ...res,
            status: true,
        }
    })
};

