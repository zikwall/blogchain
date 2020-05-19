import moment from "moment";
import { Time } from "@blogchain/utils";
import { Label } from "semantic-ui-react";

const UICreatedAt = ({ time }) => (
    <Label as='a' basic>
        {moment(Time.toJsUnix(time)).fromNow()}
    </Label>
);

export default UICreatedAt;