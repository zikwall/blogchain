import {Header, Icon, Image, Label, Segment} from "semantic-ui-react";
import moment from "moment";
import Link from "next/link";

export const TagBar = ({ tags, tagget }) => {
    return (
        <div style={{ paddingBottom: '20px' }}>
            {tags.map((v, k) => (
                <Label key={k} as='a' horizontal tag={tagget} pointing={tagget}>
                    { v }
                </Label>
            ))}
        </div>
    )
};

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

const ImageWrap = ({ src }) => (
    <div style={{ paddingBottom: '10px' }}>
        <Image src={src} centered />
    </div>
);

const Publisher = ({ name, time, avatar }) => {
    const avatarIs = !!avatar ? avatar : "/images/zebra_pl.jpg";

    return (
        <>
            <Label as='a' basic image>
                <img src={avatarIs}/>
                {name}
            </Label>
            <Label as='a' basic>
                {moment(time).fromNow()}
            </Label>
        </>
    )
};

const Article = ({ title, text, image, tags, labels, publisher }) => {
    return (
        <Segment>

            <Publisher
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
                <TagBar tags={tags} />
            }

            {
                image &&
                <ImageWrap src={image} />
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
