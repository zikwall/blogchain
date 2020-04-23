import { Header, Icon, Label, Segment } from "semantic-ui-react";
import moment from "moment";
import Link from "next/link";
import { makeCdn } from "../constants";
import UICoverImage from "./ui/UICoverImage";
import UIPublisher from "./ui/UIPublisher";
import UITagBar from "./ui/UITagbar";


export const LabelBar = ({ ratings, views, bookmarks, comments }) => (
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
        <Link href="/post/13#comments" as="/post/13/#comments">
            <Label basic color='blue' pointing as='a'>
                Comments
                <Label.Detail>{ comments }</Label.Detail>
            </Label>
        </Link>
    </>
);

const Article = ({ title, text, image, tags, labels, publisher }) => {
    return (
        <Segment>

            <UIPublisher
                name={publisher.author}
                time={publisher.time}
                avatar={publisher.avatar}
            />

            <Header as='h2'>
                <a href="/post/13" style={{
                    textDecoration: 'none',
                    color: 'rgba(0,0,0,.87)'
                }}>
                    { title }
                </a>
            </Header>

            {
                tags &&
                <UITagBar tags={tags} />
            }

            {
                image &&
                <UICoverImage src={makeCdn(image)} />
            }

            { text }

            <div style={{ paddingTop: '5px' }} />
            <LabelBar
                ratings={labels.ratings}
                views={labels.views}
                comments={labels.comments}
                bookmarks={labels.bookmarks}
            />
        </Segment>
    )
};

export default Article;
