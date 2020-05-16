import { Label } from "semantic-ui-react";
import moment from "moment";
import { Time } from '@blogchain/utils';

const UIPublisher = ({ name, time, avatar }) => {
    const avatarIs = !!avatar ? avatar : "/images/zebra_pl.jpg";

    return (
        <>
            <Label as='a' basic image>
                <img src={avatarIs}/>
                {name}
            </Label>
            <Label as='a' basic>
                {moment(Time.toJsUnix(time)).fromNow()}
            </Label>
        </>
    )
};

export default UIPublisher;