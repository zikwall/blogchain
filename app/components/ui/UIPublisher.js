import { Label } from "semantic-ui-react";
import moment from "moment";
import { Time } from '@blogchain/utils';
import { UICreatedAt } from "@blogchain/components";

const UIPublisher = ({ name, time, avatar }) => {
    const avatarIs = !!avatar ? avatar : "/images/zebra_pl.jpg";

    return (
        <>
            <Label as='a' basic image>
                <img src={avatarIs} decoding={"async"}/>
                {name}
            </Label>
            <UICreatedAt time={time} />
        </>
    )
};

export default UIPublisher;