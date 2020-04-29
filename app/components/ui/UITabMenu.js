import { Menu } from "semantic-ui-react";

const UITabMenu = ({ children }) => (
    <Menu pointing secondary>
        { children }
    </Menu>
);

export default UITabMenu;