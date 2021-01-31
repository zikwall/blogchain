import { createRef } from 'react';
import {
    Container,
    Grid,
    Ref,
    Sticky,
} from "semantic-ui-react";

import CommentExampleThreaded from "@blogchain/components/examples/Comment";
import MoreOfAuthor from "@blogchain/components/examples/MoreOfAuthor";
import { CommonLayout } from "@blogchain/layouts";

import {
    UICompanyBanner,
    UIPublisherSection,
    UICompanyInfo,
    UIArticleContent
} from "@blogchain/components";
import { ContentClient } from "@blogchain/services";

const Post = ({ content }) => {
    const contextRef = createRef();

    return (
        <CommonLayout
            title={`${content.title} | Blogchain`}
        >
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
    const { content, statusCode } = await ContentClient.content(id);

    return { content: content, statusCode: statusCode }
};

export default Post;
