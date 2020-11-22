/**
 * THIS ALL IS DEPRECATED!
 * TODO REMOVE ALL
 */

import { apiFetch, apiPost } from "../api";

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

