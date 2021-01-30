function isDevelopment() {
    return !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
}

const imageDomains = [];

if (isDevelopment()) {
    imageDomains.push('127.0.0.1', 'avatars1.githubusercontent.com', 'habrastorage.org', 'hsto.org');
}

module.exports = {
    images: {
        domains: imageDomains,
    },
}