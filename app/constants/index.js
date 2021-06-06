import { EnvHelper } from '@blogchain/help';
import publicRuntimeConfig from "@blogchain/config/runtime";

export const APP_CONFIG = require('@blogchain/app.config');

export const API_DOMAIN = EnvHelper.through(
    publicRuntimeConfig.development_host,
    publicRuntimeConfig.production_host,
);

export const IMAGES_CDN = EnvHelper.through(
    `${publicRuntimeConfig.development_cdn_host}`,
    `${publicRuntimeConfig.production_cdn_host}`,
);

export const SESSION_TOKEN_KEY = '__blogchain_token';
export const USER_KEY = '__blogchain_identifier';
export const USER_THEME = '__blogchain_theme';

export const makeCdn = (file) => {
    return new URL(file, IMAGES_CDN).href
};