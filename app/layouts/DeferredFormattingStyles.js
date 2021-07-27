import Head from "next/head";

import 'react-quill/dist/quill.snow.css';

export default function DeferredFormattingStyles({ children }) {
    return (
        <>
            <Head>
                <script defer src="/js/highlight.pack.js"/>
                <script defer src="/js/hls.js" />
                <link defer href="/css/highlight-github.css" rel="stylesheet" />

                <link defer rel="stylesheet" href="/css/katex.min.css"/>
                <script defer src="/js/katex.min.js"/>
            </Head>
            { children }
        </>
    )
}