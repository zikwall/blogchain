import { UIMenuItemLink } from "../index";
import { Label, Menu } from "semantic-ui-react";

const UITagsAsside = ({ tags }) => {
    return (
        <Menu pointing secondary vertical fluid>
            {tags.map((v, k) => (
                <UIMenuItemLink
                    key={k}
                    href={v.href}
                    as={v.href}
                    name={
                        <>
                            { v.title }
                            <Label basic color='green'>{ v.count }</Label>
                        </>
                    }
                />
            ))}
        </Menu>
    )
};

export default UITagsAsside;