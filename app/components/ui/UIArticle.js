import React from 'react';
import { Header, Icon, Label, Segment } from "semantic-ui-react";
import Link from "next/link";
import { makeCdn } from "@blogchain/constants";
import UICoverImage from "./UICoverImage";
import UIPublisher from "./UIPublisher";
import UITagBar from "./UITagbar";

export const LabelBar = ({ link, ratings, views, bookmarks, comments }) => (
    <>
        <Label basic pointing>
            <Icon name='lightning' /> { ratings }
        </Label>
        <Label basic pointing>
            <Icon name='eye' /> { views }
        </Label>
        <Label basic pointing>
            <Icon name='bookmark' /> { bookmarks }
        </Label>
        <Link href={`/post/[id]/#comments`} as={`${link}#comments`}>
            <Label basic color='blue' pointing as='a'>
                Comments
                <Label.Detail>{ comments }</Label.Detail>
            </Label>
        </Link>
    </>
);

const UIArticle = ({ id, title, text, image, tags, labels, publisher }) => {
    const link = `/post/${id}`;

    return (
        <Segment>

            <UIPublisher
                name={publisher.author}
                time={publisher.time}
                avatar={publisher.avatar}
            />

            <Header as='h2'>
                <Link href={'/post/[id]'} as={link} passHref>
                    <a>
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
            <LabelBar
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