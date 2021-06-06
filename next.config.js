// This section describes configurations at the client compilation/build stage and is not included in the browser build.
// This is a normal module Node.js.
const secrets = require('./docker.secrets');

function isDevelopment() {
    return !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
}

const imageDomains = [];
const runtime = {
    development_host: process.env.API_HOST_DEV || secrets.read('api_host_dev.secret') || 'http://127.0.0.1:3001',
    production_host: process.env.API_HOST || secrets.read('api_host.secret'),
    development_cdn_host: process.env.CDN_HOST_DEV || secrets.read('cdn_host_dev.secret') || 'http://127.0.0.1:',
    production_cdn_host: process.env.CDN_HOST || secrets.read('api_host.secret'),
};

if (isDevelopment()) {
    imageDomains.push(runtime.development_cdn_host, 'avatars1.githubusercontent.com', 'habrastorage.org', 'hsto.org');
} else {
    imageDomains.push(runtime.production_cdn_host)
}

module.exports = {
    images: {
        domains: imageDomains,
    },
    publicRuntimeConfig: runtime,
}