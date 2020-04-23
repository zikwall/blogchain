import { Label } from 'semantic-ui-react';

const UITagBar = ({ tags, tagget }) => {
    return (
        <div style={{ paddingBottom: '10px' }}>
            {tags.map((v, k) => (
                <Label key={k} as='a' horizontal tag={tagget} pointing={tagget}>
                    { v }
                </Label>
            ))}
        </div>
    )
};

export default UITagBar;