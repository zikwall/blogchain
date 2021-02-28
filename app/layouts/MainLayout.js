import Head from "next/head";
import { Container} from 'semantic-ui-react';
import { ThemeProvider, useThemeContext } from "@blogchain/components";

const MainLayout = ({ children }) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="apple-touch-icon" sizes="57x57" href="/fav/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/fav/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/fav/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/fav/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/fav/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/fav/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/fav/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/fav/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/fav/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192"  href="/fav/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/fav/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/fav/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/fav/favicon-16x16.png" />
                <link rel="manifest" href="/fav/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff" />
                <script src="/js/highlight.pack.js"></script>
                <script src="/js/hls.js" />
                <link href="/css/highlight-github.css" rel="stylesheet" />

                <link rel="stylesheet" href="/css/katex.min.css"/>
                <script defer src="/js/katex.min.js"></script>
                <title>Blogchain | Ваш лучший блогер</title>
            </Head>
            <ThemeProvider>
                <AppRootContainer>
                    { children }
                </AppRootContainer>
            </ThemeProvider>
        </>
    )
};

const AppRootContainer = ({ children }) => {
    const [ theme ] = useThemeContext();

    return (
        <div style={{
            backgroundColor: theme.isDark ? '#0d1117' : '#ffffff',
            transition: '0.5s background ease',
        }}>
            <Container fluid className="root-container">
                { children }
            </Container>
        </div>
    )
}

export default MainLayout;
