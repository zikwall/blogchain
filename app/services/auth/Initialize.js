import Router from 'next/router';
import { reauthenticate, deauthenticate } from '../../redux/actions';
import { Cookie } from '../../help';
import { USER_KEY, SESSION_TOKEN_KEY } from "../../constants";
import Session from "./Session";

// checks if the page is being loaded on the server, and if so, get auth token from the cookie:
export default (ctx) => {
    if(ctx.isServer) {

        // if has cookies & has token -- try auth
        if(ctx.req.headers.cookie) {
            const ucookie = Cookie.getCookie(USER_KEY, ctx.req);
            const tcookie = Cookie.getCookie(SESSION_TOKEN_KEY, ctx.req);

            if (typeof tcookie === "undefined" || typeof ucookie === "undefined") {
                return false;
            }

            let user = null;
            let token = tcookie;

            try {
                user = JSON.parse(ucookie);
            } catch (e) {
                // do stuff
            }

            if (token && Session.isSessionExpired(token)) {
                ctx.store.dispatch(deauthenticate());
            } else {
                ctx.store.dispatch(reauthenticate(token, user));
            }
        }

        return true;
    }

    let token = ctx.store.getState().authentication.token;

    if (token && Session.isSessionExpired(token)) {
        token = null;
        ctx.store.dispatch(deauthenticate());
    }

    if(token && (ctx.pathname === '/login' || ctx.pathname === '/register')) {
        Router.push('/');
    }
};
