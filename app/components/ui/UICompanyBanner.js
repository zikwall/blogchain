import { Divider } from "semantic-ui-react";
import UIPublisherSegment from "./UIPublisherSegment";
import UIImageWrap from "./UIImageWrap";
import { useThemeContext } from "@blogchain/components";

const UICompanyBanner = () => {
    const [ theme ] = useThemeContext();

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <div>
                <UIImageWrap src="/images/tmp/ef9651c3e10ff0f9621e263adbfe3c91.png" />
            </div>
            <UIPublisherSegment
                src="https://hsto.org/getpro/habr/company/47a/cf3/171/47acf31717fba8e1697e298bb79a6167.png"
                title="Онлайн-кинотеатр ivi"
                subTitle="Компания"
            />

            <Divider inverted={theme.isDark} />
        </div>
    )
};

export default UICompanyBanner;
