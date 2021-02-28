import { Label } from "semantic-ui-react";
import { UICreatedAt, useThemeContext } from "@blogchain/components";

const UIPublisher = ({ name, time, avatar }) => {
    const avatarIs = !!avatar ? avatar : "/images/zebra_pl.jpg";
    const [ theme ] = useThemeContext();
    const additionalProps = {};

    if (theme.isDark) {
        additionalProps['color'] = 'black';
    } else {
        additionalProps['basic'] = true;
    }

    return (
        <>
            <Label as='a' image {...additionalProps}>
                <img src={avatarIs} decoding={"async"}/>
                {name}
            </Label>
            <UICreatedAt time={time} />
        </>
    )
};

export default UIPublisher;