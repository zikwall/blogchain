import { StringHelper } from "@blogchain/help";
import { BlogchainClient } from "@blogchain/services";

export async function profile(username) {
    let url = '/api/v1/profile';

    url = StringHelper.REST(url, username);

    return BlogchainClient.get(url);
}