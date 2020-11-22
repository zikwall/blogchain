import { BlogchainClient } from "@blogchain/services";

export async function login(credentials) {
    return BlogchainClient.post('/auth/login', JSON.stringify(credentials));
}

export async function logout() {
    // todo
}

export async function register() {
    // todo
}