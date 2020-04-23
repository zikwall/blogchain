import { createRef } from 'react';
import Head from "next/head";
import {
    Container,
    Grid,
    Ref,
    Sticky,
} from "semantic-ui-react";

import CommentExampleThreaded from "../../app/components/examples/Comment";
import MoreOfAuthor from "./MoreOfAuthor";
import { CommonLayout } from "../../app/layouts";

import {
    UICompanyBanner,
    UIPublisherSection,
    UICompanyInfo,
    UIArticleContent
} from "../../app/components";
import { Content } from "../../app/services";

const Post = ({ content }) => {
    const contextRef = createRef();

    return (
        <CommonLayout>
            <Head>
                <title>{ content.title } | Blocgchain</title>
            </Head>
            <Container>
                <UICompanyBanner />

                <Grid>
                    <Ref innerRef={contextRef}>
                        <Grid.Row columns={2}>
                            <Grid.Column width={12}>
                                <UIArticleContent content={content} />
                                <UIPublisherSection />
                                <CommentExampleThreaded />
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <UICompanyInfo />
                                <Sticky context={contextRef} offset={30}>
                                    <MoreOfAuthor />
                                </Sticky>
                            </Grid.Column>
                        </Grid.Row>
                    </Ref>
                </Grid>
            </Container>
        </CommonLayout>
    )
};

Post.getInitialProps = async ({ query, res }) => {
    const { id } = query;
    const { status, content } = await Content.GetContent(id);

    return { content: content, statusCode: status ? false : 404 }
};

export default Post;