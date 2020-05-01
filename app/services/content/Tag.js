import {apiFetch} from "../api";

export const getTags = () => {
    return apiFetch('/api/v1/tags').then((res) => {
        if (res.status === 100) {
            return {
                status: false,
                tags: [],
            }
        }

        return {
            ...res,
            status: true,
        }
    })
};