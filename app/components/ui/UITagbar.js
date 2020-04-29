import React from 'react';
import { Label } from 'semantic-ui-react';
import Link from 'next/link';

const TagLink = React.forwardRef(({ onClick, href, tag, tagget }, ref) => {
    return (
        <a href={href} onClick={onClick} ref={ref}>
            <Label as='span' horizontal tag={tagget} pointing={tagget}>
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