import { UIMenuItemLink } from "../index";
import { Label, Menu } from "semantic-ui-react";

const UITagsAsside = ({ tags }) => {
    return (
        <div className='root-tag-asside'>
            <Menu pointing secondary vertical fluid>
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
                                    <Label basic color='green'>{ v.count }</Label>
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