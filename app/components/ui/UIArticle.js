import React from 'react';
import { Header, Segment } from "semantic-ui-react";
import Link from "next/link";
import { makeCdn } from "@blogchain/constants";
import UICoverImage from "./UICoverImage";
import UIPublisher from "./UIPublisher";
import UITagBar from "./UITagbar";
import UILabelBar from "@blogchain/components/ui/UILabelBar";
import { useThemeContext } from "@blogchain/components";

const UIArticle = ({ id, title, text, image, tags, labels, publisher }) => {
    const link = `/post/${id}`;
    const [ theme ] = useThemeContext();

    return (
        <Segment inverted={theme.isDark}>

            <UIPublisher
                name={publisher.author}
                time={publisher.time}
                avatar={publisher.avatar}
            />

            <Header as='h2' inverted={theme.isDark}>
                <Link href={'/post/[id]'} as={link} passHref>
                    <a className={['themedlink', theme.isDark ? 'dark' : 'white'].join(' ')}>
                        { title }
                    </a>
                </Link>
            </Header>

            {
                !!tags > 0 &&
                <UITagBar tags={tags} />
            }

            {
                image &&
                <UICoverImage src={makeCdn(image)} />
            }

            { text }

            <div style={{ paddingTop: '5px' }} />
            <UILabelBar
                link={link}
                ratings={labels.ratings}
                views={labels.views}
                comments={labels.comments}
                bookmarks={labels.bookmarks}
            />
        </Segment>
    )
};

export default UIArticle;