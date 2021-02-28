import { UIMenuItemLink, useThemeContext } from "../index";
import { Label, Menu } from "semantic-ui-react";

const UITagsAsside = ({ tags }) => {
    const [ theme ] = useThemeContext();

    return (
        <div className='root-tag-asside'>
            <Menu pointing secondary vertical fluid inverted={theme.isDark}>
                {tags.map((v, k) => (
                    <UIMenuItemLink
                        key={k}
                        href={'/tag/[tag]'}
                        as={v.href}
                        name={
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                lineHeight: 1.6,
                                alignItems: 'center'
                            }}>
                                { v.title }
                                <div>
                                    <Label
                                        basic
                                        color={
                                            theme.isDark ? 'orange' : 'green'
                                        }>
                                        { v.count }
                                    </Label>
                                </div>
                            </div>
                        }
                    />
                ))}
            </Menu>
        </div>
    )
};

export default UITagsAsside;