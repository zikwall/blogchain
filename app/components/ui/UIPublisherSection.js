import { Divider, Segment } from "semantic-ui-react";
import UIPublisherSegment from "./UIPublisherSegment";
import { useThemeContext } from "@blogchain/components";

const Link = ({ href, title }) => (
    <a href={href} style={{
        paddingRight: '15px'
    }}>
        { title }
    </a>
);

const UIPublisherSection = () => {
    const [ theme ] = useThemeContext();

    return (
        <Segment inverted={theme.isDark}>
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
                    src="https://hsto.org/getpro/habr/company/47a/cf3/171/47acf31717fba8e1697e298bb79a6167.png"
                    title="Онлайн-кинотеатр ivi"
                    subTitle="Компания"
                />

                <Divider inverted={theme.isDark} />
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
    )
};

export default UIPublisherSection;