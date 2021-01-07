import { EnvHelper } from '@blogchain/help';

export const APP_CONFIG = require('@blogchain/app.config');

export const API_DOMAIN = EnvHelper.through(
    'http://127.0.0.1:3001',
    'http://127.0.0.1:3001'
);
export const IMAGES_CDN = EnvHelper.through(
    'http://127.0.0.1:3001/uploads',
    'http://127.0.0.1:3001/uploads'
);

export const SESSION_TOKEN_KEY = '__blogchain_token';
export const USER_KEY = '__blogchain_identifier';

export const makeCdn = (file) => {
    return IMAGES_CDN + '/' + file;
};

