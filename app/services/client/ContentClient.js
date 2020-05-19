import { BlogchainClient } from '@blogchain/services';
import { StringHelper } from "@blogchain/help";

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
    let options = {
        headers: {
            'Authorization': BlogchainClient.authHeader(token)
        }
    };

    return BlogchainClient.get(url, null, options);
}

export async function userContents(id) {
    let url = StringHelper.REST('/api/v1/contents/user', id);

    return BlogchainClient.get(url);
}