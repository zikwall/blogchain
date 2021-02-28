import React from 'react';
import { Label } from 'semantic-ui-react';
import Link from 'next/link';
import { useThemeContext } from "@blogchain/components";

const TagLink = React.forwardRef(({ onClick, href, tag, tagget }, ref) => {
    const [ theme ] = useThemeContext();
    const additionalProps = {};

    if (theme.isDark) {
        additionalProps['color'] = 'black';
    }

    return (
        <a href={href} onClick={onClick} ref={ref}>
            <Label as='span' horizontal tag={tagget} pointing={tagget} {...additionalProps}>
                { tag.name }
            </Label>
        </a>
    )
});

const UITagBar = ({ tags, tagget }) => {
    return (
        <div className='tagget-content'>
            {tags.map((v, k) => (
                <Link key={k} href={`/tag/[tag]`} as={`/tag/${v.label}`} passHref>
                    <TagLink tag={v} tagget={tagget} />
                </Link>
            ))}
        </div>
    )
};

export default UITagBar;