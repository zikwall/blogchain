import { Menu } from "semantic-ui-react";
import { useThemeContext } from "@blogchain/components";

const UITabMenu = ({ children }) => {
    const [ theme ] = useThemeContext();

    return (
        <Menu pointing secondary inverted={theme.isDark}>
            { children }
        </Menu>
    )
};

export default UITabMenu;