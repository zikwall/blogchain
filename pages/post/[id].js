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

const Post = () => {
    const contextRef = createRef();

    return (
        <CommonLayout>
            <Head>
                <title>Как мы научились делить видео на сцены с помощью хитрой математики</title>
            </Head>
            <Container>
                <UICompanyBanner />

                <Grid>
                    <Ref innerRef={contextRef}>
                        <Grid.Row columns={2}>
                            <Grid.Column width={12}>
                                <UIPublisher
                                    name='SashulyaK'
                                    time='сегодня в 13:08'
                                    avatar="https://habrastorage.org/getpro/habr/avatars/791/217/d31/791217d314e7458aef0f63497e212538.png"
                                />
                                <Header as='h1'>
                                    Как мы научились делить видео на сцены с помощью хитрой математики
                                </Header>

                                <UITagbar tags={[
                                    "Разработка под Arduino",
                                    "Периферия",
                                    "DIY или Сделай сам"
                                ]} />


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

export default Post;
