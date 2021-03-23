import React from 'react';
import { Card } from "semantic-ui-react";
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
        <Card fluid className={ theme.isDark ? 'dark' : 'white' }>
            <Card.Content>
                <UIPublisher
                    name={publisher.author}
                    time={publisher.time}
                    avatar={publisher.avatar}
                />

                <div style={{ paddingTop: '1.5em' }} />

                <Card.Header as='h2'>
                    <Link href={'/post/[id]'} as={link} passHref>
                        <a className={['themedlink', theme.isDark ? 'dark' : 'white'].join(' ')}>
                            { title }
                        </a>
                    </Link>
                </Card.Header>

                {
                    !!tags > 0 &&
                    <UITagBar tags={tags} />
                }

                {
                    image &&
                    <UICoverImage src={makeCdn(image)} />
                }
            </Card.Content>
            <Card.Content extra>
                <UILabelBar
                    link={link}
                    ratings={labels.ratings}
                    views={labels.views}
                    comments={labels.comments}
                    bookmarks={labels.bookmarks}
                />
            </Card.Content>
        </Card>
    )
};

export default UIArticle;