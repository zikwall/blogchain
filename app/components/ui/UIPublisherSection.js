import {Divider, Segment} from "semantic-ui-react";
import UIPublisherSegment from "./UIPublisherSegment";

const Link = ({ href, title }) => (
    <a href={href} style={{
        paddingRight: '15px'
    }}>
        { title }
    </a>
);

const UIPublisherSection = () => (
    <Segment>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '10px'
        }}>
            <UIPublisherSegment
                src="https://habrastorage.org/getpro/habr/avatars/791/217/d31/791217d314e7458aef0f63497e212538.png"
                title="Александр Коншин"
                subTitle="Computer Vision Engineer"
            />
            <div style={{ paddingBottom: '10px' }} />
            <UIPublisherSegment
                src="https://habrastorage.org/getpro/habr/company/de3/eb1/713/de3eb17133e3c96998ca610c74492640.jpg"
                title="Онлайн-кинотеатр ivi"
                subTitle="Компания"
            />

            <Divider />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
            }}>
                <Link href="/" title="Сайт" />
                <Link href="/" title="Facebook" />
                <Link href="/" title="ВКонтакте" />
            </div>
        </div>
    </Segment>
);

export default UIPublisherSection;