import {Image} from "semantic-ui-react";

const UIImageWrap = ({ src }) => (
    <div style={{ paddingBottom: '10px' }}>
        <Image rounded src={src} centered />
    </div>
);

export default UIImageWrap;