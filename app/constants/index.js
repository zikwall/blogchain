import { EnvHelper } from '@blogchain/help';
import publicRuntimeConfig from "@blogchain/config/runtime";

export const APP_CONFIG = require('@blogchain/app.config');

export const API_DOMAIN = EnvHelper.through(
    publicRuntimeConfig.development_host,
    publicRuntimeConfig.production_host,
);

export const IMAGES_CDN = EnvHelper.through(
    `${publicRuntimeConfig.development_host}/uploads`,
    `${publicRuntimeConfig.production_host}/uploads`,
);

export const SESSION_TOKEN_KEY = '__blogchain_token';
export const USER_KEY = '__blogchain_identifier';

export const makeCdn = (file) => {
    return IMAGES_CDN + '/' + file;
};