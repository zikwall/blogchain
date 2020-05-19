import { Icon, Label } from "semantic-ui-react";
import Link from "next/link";

export const UILabelBar = ({ link, ratings, views, bookmarks, comments }) => (
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

export default UILabelBar;