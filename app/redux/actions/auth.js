import { AUTHENTICATE, DEAUTHENTICATE } from '@blogchain/redux/types';
import { Cookie } from '@blogchain/help';
import { apiFetch } from "@blogchain/services/api";
import { SESSION_TOKEN_KEY, USER_KEY } from "@blogchain/constants";

// gets token from the api and stores it in the redux store and in cookie
const authenticate = ({ username, password }) => {
    return (dispatch) => {
        return apiFetch('/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            })
        }).then((response) => {
            if (response.status && response.status === 200) {
                Cookie.setCookie(SESSION_TOKEN_KEY, response.token);
                Cookie.setCookie(USER_KEY, JSON.stringify(response.user));

                dispatch({type: AUTHENTICATE, token: response.token, user: response.user});

                return {
                    status: true,
                    message: ""
                }
            }

            return {
                status: false,
                message: response.message
            };
        }).catch((error) => {
            throw new Error(error);
        });
    }
};

// gets the token from the cookie and saves it in the store
const reauthenticate = (token, user) => {
    return (dispatch) => {
        dispatch({type: AUTHENTICATE, token: token, user: user});
    };
};

// removing the token
const deauthenticate = () => {
    return (dispatch) => {
        Cookie.removeCookie(SESSION_TOKEN_KEY);
        Cookie.removeCookie(USER_KEY);
        dispatch({type: DEAUTHENTICATE});
    };
};

export {
    authenticate,
    reauthenticate,
    deauthenticate,
};
