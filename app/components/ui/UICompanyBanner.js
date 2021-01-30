import { Divider } from "semantic-ui-react";
import UIPublisherSegment from "./UIPublisherSegment";
import UIImageWrap from "./UIImageWrap";

const UICompanyBanner = () => (
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

        <Divider />
    </div>
);

export default UICompanyBanner;
