import moment from "moment";
import { Time } from "@blogchain/utils";
import { Label } from "semantic-ui-react";
import { useThemeContext } from "@blogchain/components";

const UICreatedAt = ({ time }) => {
    const [ theme ] = useThemeContext();
    const additionalProps = {};

    if (theme.isDark) {
        additionalProps['color'] = 'black';
    } else {
        additionalProps['basic'] = true;
    }

    return (
        <Label as='a' {...additionalProps}>
            {moment(Time.toJsUnix(time)).fromNow()}
        </Label>
    )
};

export default UICreatedAt;