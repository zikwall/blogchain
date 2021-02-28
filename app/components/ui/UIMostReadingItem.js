import { Divider, Header, Icon, Label } from "semantic-ui-react";
import { useThemeContext } from "@blogchain/components";

const MostReadingLabels = ({ ups, views, bookmarks, comments }) => {
    const [ theme ] = useThemeContext();
    const additionalProps = {};

    if (theme.isDark) {
        additionalProps['color'] = 'black';
    } else {
        additionalProps['basic'] = true;
    }

    return (
        <>
            <Label {...additionalProps}>
                <Icon name='arrow up' /> { ups }
            </Label>
            <Label {...additionalProps}>
                <Icon name='eye' /> { views }
            </Label>
            <Label {...additionalProps}>
                <Icon name='bookmark' /> { bookmarks }
            </Label>
            <Label as="a" {...additionalProps}>
                <Icon name='comment' /> { comments }
            </Label>
        </>
    )
};

const UIMostReadingItem = ({ labels, title, href }) => {
    const [ theme ] = useThemeContext();

    return (
        <>
            <Header as="h4" inverted={theme.isDark}>
                <a href={href} style={{
                    textDecoration: 'none',
                    color: theme.isDark ? '#ffffff' : 'rgba(0,0,0,.87)',
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
            <Divider inverted={theme.isDark}/>
        </>
    )
};

export default UIMostReadingItem;