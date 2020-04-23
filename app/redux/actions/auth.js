import { AUTHENTICATE, DEAUTHENTICATE } from '../types';
import { Cookie } from '../../help';
import { apiFetch } from "../../services/api";
import { SESSION_TOKEN_KEY, USER_KEY } from "../../constants";

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
        dispatch({type: DEAUTHENTICATE});
    };
};

export {
    authenticate,
    reauthenticate,
    deauthenticate,
};
