import { Label, Header, Divider, Icon } from 'semantic-ui-react';
import { useThemeContext } from "@blogchain/components";

const MoreLabels = ({ views, comments }) => {
    const [ theme ] = useThemeContext();

    return (
        <>
            <Label basic>
                <Icon name='eye' /> { views }
            </Label>
            <Label basic as="a">
                <Icon name='comment' /> { comments }
            </Label>
        </>
    )
};

const UIMoreItem = ({ labels, title, href }) => {
    const [ theme ] = useThemeContext();

    return (
        <>
            <Header as="h4" inverted={theme.isDark}>
                <a href={href} style={{
                    textDecoration: 'none',
                    color: theme.isDark ? '#ffffff' : 'rgba(0,0,0,.87)'
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