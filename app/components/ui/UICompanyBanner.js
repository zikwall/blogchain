import {Divider} from "semantic-ui-react";
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
            src="https://habrastorage.org/getpro/habr/company/de3/eb1/713/de3eb17133e3c96998ca610c74492640.jpg"
            title="Онлайн-кинотеатр ivi"
            subTitle="Компания"
        />

        <Divider />
    </div>
);

export default UICompanyBanner;
