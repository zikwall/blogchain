import { Label, Header, Divider, Icon } from 'semantic-ui-react';

const MoreLabels = ({ views, comments }) => (
    <>
        <Label basic>
            <Icon name='eye' /> { views }
        </Label>
        <Label basic as="a">
            <Icon name='comment' /> { comments }
        </Label>
    </>
);

const UIMoreItem = ({ labels, title, href }) => {
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
            <MoreLabels
                views={labels.views}
                comments={labels.comments}
            />
            <Divider />
        </>
    )
};

export default UIMoreItem;