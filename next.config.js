// This section describes configurations at the client compilation/build stage and is not included in the browser build.
// This is a normal module Node.js.
const secrets = require('./docker.secrets');

function isDevelopment() {
    return !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
}

const imageDomains = [];

if (isDevelopment()) {
    imageDomains.push('127.0.0.1', 'avatars1.githubusercontent.com', 'habrastorage.org', 'hsto.org');
}

if (!isDevelopment()) {
    console.log([
        'Usage:', process.env.API_HOST, process.env.PORT,
    ])
}

module.exports = {
    images: {
        domains: imageDomains,
    },
    publicRuntimeConfig: {
        development_host: process.env.API_HOST_DEV || secrets.read('api_host_dev') || 'http://127.0.0.1:3001',
        production_host: process.env.API_HOST || secrets.read('api_host'),
    },
}