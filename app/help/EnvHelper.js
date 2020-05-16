export function isDevelopment() {
    return !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
}

export function through(development, production) {
    if (isDevelopment()) {
        return development;
    }

    return production;
}