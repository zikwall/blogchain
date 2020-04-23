import decode from 'jwt-decode';
import { Cookie } from '../../help';
import Cookies from 'js-cookie';
import { SESSION_TOKEN_KEY, USER_KEY } from "../../constants";

export default class Session {
    static isGuest = (req) => {
        return !Session.isLogged(req);
    };

    static isLogged = (req) => {
        const token = Cookie.getCookie(SESSION_TOKEN_KEY, req);
        return !!token && !Session.isSessionExpired(token);
    };

    static isSessionExpired = (accessToken) => {
        try {
            const decoded = decode(accessToken);

            console.log(decoded.exp);

            return (decoded.exp < Date.now() / 1000);
        } catch (err) {
            console.log('Expired token! Logout...');

            // only remove from client
            Cookies.remove(SESSION_TOKEN_KEY);
            Cookies.remove(USER_KEY);

            return false;
        }
    };

    static flushSession = () => {
        Cookie.removeCookie(SESSION_TOKEN_KEY);
    };
}
