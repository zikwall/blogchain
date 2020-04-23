import {Divider, Header, Icon, Label} from "semantic-ui-react";

const MostReadingLabels = ({ ups, views, bookmarks, comments }) => (
    <>
        <Label basic>
            <Icon name='arrow up' /> { ups }
        </Label>
        <Label basic>
            <Icon name='eye' /> { views }
        </Label>
        <Label basic>
            <Icon name='bookmark' /> { bookmarks }
        </Label>
        <Label basic as="a">
            <Icon name='comment' /> { comments }
        </Label>
    </>
);

const UIMostReadingItem = ({ labels, title, href }) => {
    return (
        <>
            <Header as="h4">
                <a href={href} style={{
                    textDecoration: 'none',
                    color: 'rgba(0,0,0,.87)'
                }}>
                    { title }
                </a>
            </Header>
            <MostReadingLabels
                ups={labels.ups}
                views={labels.views}
                bookmarks={labels.bookmarks}
                comments={labels.comments}
            />
            <Divider />
        </>
    )
};

export default UIMostReadingItem;