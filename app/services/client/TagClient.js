import { BlogchainClient } from "@blogchain/services";

export async function tags() {
    return BlogchainClient.get('/api/v1/tags');
}