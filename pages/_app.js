import { Provider } from "react-redux";
import App from "next/app";
import ErrorPage from 'next/error';
import withRedux from "next-redux-wrapper";
import { MainLayout } from "../app/layouts";
import { makeStore } from "../app/redux/Store";
import { Initialize } from '../app/services/auth';
import { Http } from "../app/utils";

// assets
import 'semantic-ui-css/semantic.min.css'
import '../app/assets/custom.css';
import 'react-quill/dist/quill.snow.css';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {

        /**
         * Initial session of user
         */
        Initialize(ctx);

        /**
         * Initial props in pages
         * @type {{}}
         */
        const props = {
            ...(Component.getInitialProps
                ? await Component.getInitialProps(ctx)
                : {})
        };

        /**
         * Set http status code for Next SEO, it's real HTTP code not props
         */
        if (props.statusCode && ctx.res) {
            ctx.res.statusCode = props.statusCode
        }

        return {
            pageProps: props
        };
    }

    render() {
        const { Component, pageProps, store } = this.props;

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
        if (pageProps.statusCode && Http.isOk(pageProps.statusCode) === false) {
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
}

export default withRedux(makeStore)(MyApp);
