import { createRef } from 'react';
import Head from "next/head";
import {
    Container,
    Grid,
    Header,
    Ref,
    Sticky,
} from "semantic-ui-react";

import CommentExampleThreaded from "../../app/components/examples/Comment";
import MoreOfAuthor from "./MoreOfAuthor";
import { CommonLayout } from "../../app/layouts";

import {
    UIPublisher,
    UITagbar,
    UITags,
    UICompanyBanner,
    UIPublisherSection,
    UICompanyInfo,
} from "../../app/components";
import { Content } from "../../app/services";
import UICoverImage from "../../app/components/ui/UICoverImage";
import { makeCdn } from "../../app/constants";

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
                                <UIPublisher
                                    name={content.related.publisher.profile.name}
                                    time={content.created_at}
                                    avatar={content.related.publisher.profile.avatar}
                                />
                                <Header as='h1'>
                                    { content.title }
                                </Header>

                                <UITagbar tags={[
                                    "Разработка под Arduino",
                                    "Периферия",
                                    "DIY или Сделай сам"
                                ]} />

                                {
                                    content.image &&
                                    <UICoverImage src={makeCdn(content.image)} />
                                }

                                <div
                                    className="root-dangerous-content-html"
                                    dangerouslySetInnerHTML={{ __html: content.content }}
                                />

                                <UITags />
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

    if (status === false) {
        res.statusCode = 404;
        res.end('Not found');
        return;
    }

    return { content: content }
};

export default Post;
