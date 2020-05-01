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

export const GetContent = (id) => {
    return apiFetch(`/api/v1/content/${id}`).then((res) => {
        if (res.status === 100) {
            return {
                status: false,
                content: {},
            }
        }

        return {
            ...res,
            status: true,
        }
    });
};

export const GetEditContent = (id, req) => {
    return apiFetch(`/api/editor/content/${id}`, {}, req).then((res) => {
        if (res.status === 100) {
            return {
                status: false,
                content: {},
            }
        }

        return {
            //id: res.content.id,
            ...res,
            status: true,
        }
    })
};

export const GetContents = (tag = null, page = 0) => {
    let url = '/api/v1/contents';

    if (!!tag) {
        url = `/api/v1/tag/${tag}`;
    }

    if (typeof page !== 'undefined' && page > 0) {
        url = url + `/${page}`
    }

    return apiFetch(url).then((res) => {
        if (res.status === 100) {
            return {
                status: false,
                contents: [],
                meta: {}
            }
        }

        return {
            status: true,
            contents: res.contents,
            meta: res.meta
        }
    })
};