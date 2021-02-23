import Link from "next/link";
import { Icon, Label } from "semantic-ui-react";
import { useThemeContext } from "@blogchain/components";

export const UILabelBar = ({ link, ratings, views, bookmarks, comments }) => {
    const [ theme ] = useThemeContext();
    const additionalProps = {};

    if (theme.isDark) {
        additionalProps['color'] = 'black';
    } else {
        additionalProps['basic'] = true;
    }

    return (
        <>
            <Label pointing {...additionalProps}>
                <Icon name='lightning' /> { ratings }
            </Label>
            <Label pointing {...additionalProps}>
                <Icon name='eye' /> { views }
            </Label>
            <Label pointing {...additionalProps}>
                <Icon name='bookmark' /> { bookmarks }
            </Label>
            <Link href={`/post/[id]/#comments`} as={`${link}#comments`}>
                <Label {...additionalProps} color='blue' pointing as='a'>
                    Comments
                    <Label.Detail>{ comments }</Label.Detail>
                </Label>
            </Link>
        </>
    )
};

export default UILabelBar;