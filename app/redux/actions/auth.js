import { AUTHENTICATE, DEAUTHENTICATE } from '@blogchain/redux/types';
import { Cookie } from '@blogchain/help';
import { AuthClient } from "@blogchain/services";
import { SESSION_TOKEN_KEY, USER_KEY } from "@blogchain/constants";

const authenticate = ({ username, password }) => {
    return async (dispatch) => {
        const { status, message, response } = await AuthClient.login({ username, password });

        if (status) {
            const { token, user } = response;

            if (typeof token !== 'undefined') {
                Cookie.setCookie(SESSION_TOKEN_KEY, token);
                Cookie.setCookie(USER_KEY, JSON.stringify(user));

                dispatch({
                    type: AUTHENTICATE,
                    token: token,
                    user: user
                });

                return {
                    status,
                    message: ""
                }
            }
        }

        return {
            status,
            message,
        };
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
