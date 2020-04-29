import { Label } from 'semantic-ui-react';
import Link from 'next/link';

const UITagBar = ({ tags, tagget }) => {
    return (
        <div className='tagget-content'>
            {tags.map((v, k) => (
                <Link key={k} href={`/tag/[tag]`} as={`/tag/${v.label}`}>
                    <Label key={k} as='a' horizontal tag={tagget} pointing={tagget}>
                        { v.name }
                    </Label>
                </Link>
            ))}
        </div>
    )
};

export default UITagBar;