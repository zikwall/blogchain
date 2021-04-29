// native
import { createRef, useEffect } from 'react';

// dependencies
import { Container, Grid, Ref, Sticky } from "semantic-ui-react";

// application
import CommentExampleThreaded from "@blogchain/components/examples/Comment";
import MoreOfAuthor from "@blogchain/components/examples/MoreOfAuthor";
import { CommonLayout } from "@blogchain/layouts";
import { UICompanyBanner, UIPublisherSection, UICompanyInfo, UIArticleContent } from "@blogchain/components";
import { ContentClient, BlogchainClient } from "@blogchain/services";

const Post = ({ content }) => {
    const contextRef = createRef();

    useEffect(() => {
        // send statistics
        (async () => {
            !!content && await BlogchainClient.post('/statistic/post/push', JSON.stringify({
                post_id: content.id,
                owner_id: content.related.publisher.id,
            }))
        })()
    }, [])

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

    const { statusCode, response } = await ContentClient.content(id);
    const { content } = response;

    return { content, statusCode }
};

export default Post;
