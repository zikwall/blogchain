import { Label } from 'semantic-ui-react';
import Link from 'next/link';

const UITagBar = ({ tags, tagget }) => {
    return (
        <div style={{ paddingBottom: '10px' }}>
            {tags.map((v, k) => (
                <Link href={`/tag/${v.label}`} as={`/tag/${v.label}`}>
                    <Label key={k} as='a' horizontal tag={tagget} pointing={tagget}>
                        { v.name }
                    </Label>
                </Link>
            ))}
        </div>
    )
};

export default UITagBar;