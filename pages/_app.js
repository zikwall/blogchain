import { Provider } from "react-redux";
import ErrorPage from 'next/error';
import withRedux from "next-redux-wrapper";
import { MainLayout } from "@blogchain/layouts";
import { makeStore } from "@blogchain/redux/Store";
import { BootstrappedContext } from '@blogchain/services/auth';
import { Http } from "@blogchain/utils";

// assets
import 'semantic-ui-css/semantic.min.css'
import '@blogchain/assets/custom.css';
import 'react-quill/dist/quill.snow.css';

import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function ClientApplication({ Component, pageProps, store }) {
    /**
     * Handle HTTP OK status equal is 2** code
     * Get initial props in pages return statusCode, example:
     *
     * ```js
     *
     * Post.getInitialProps = async ({ query, res }) => {
     *      const { id } = query;
     *      const { status, content, statusCode } = await Content.GetContent(id);
     *      return { content: content, statusCode: statusCode }
     * };
     *
     * ```
     */
    if (pageProps.statusCode && !Http.isOk(pageProps.statusCode)) {
        return <ErrorPage statusCode={pageProps.statusCode} />
    }

    return (
        <Provider store={ store }>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </Provider>
    )
}

ClientApplication.getInitialProps = async ({ ctx, Component }) => {
    // initial session of user
    BootstrappedContext(ctx);

    const appProps = {
        statusCode: 0, ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
    };

    // set HTTP status code for Next SEO, it's real HTTP code not props
    if (appProps.statusCode && ctx.res) {
        ctx.res.statusCode = appProps.statusCode
    }

    return {
        pageProps: appProps
    };
}

export default withRedux(makeStore)(ClientApplication);
