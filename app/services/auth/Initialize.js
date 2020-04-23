import Router from 'next/router';
import { reauthenticate, deauthenticate } from '../../redux/actions';
import { Cookie } from '../../help';
import { USER_KEY, SESSION_TOKEN_KEY } from "../../constants";
import Session from "./Session";

// checks if the page is being loaded on the server, and if so, get auth token from the cookie:
export default (ctx) => {
    if(ctx.isServer) {
        if(ctx.req.headers.cookie) {
            const user = JSON.parse(Cookie.getCookie(USER_KEY, ctx.req));
            const token = Cookie.getCookie(SESSION_TOKEN_KEY, ctx.req);

            if (Session.isSessionExpired(token)) {
                ctx.store.dispatch(deauthenticate());
            } else {
                ctx.store.dispatch(reauthenticate(token, user));
            }
        }
    } else {
        let token = ctx.store.getState().authentication.token;

        if (Session.isSessionExpired(token)) {
            token = null;
            ctx.store.dispatch(deauthenticate());
        }

        if(token && (ctx.pathname === '/login' || ctx.pathname === '/register')) {
            setTimeout(function() {
                Router.push('/');
            }, 0);
        }
    }
};
