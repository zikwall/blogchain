export const isOk = (httpCode) => {
    return httpCode >= 200 && httpCode < 300;
};