import UIPublisher from "./UIPublisher";
import UITagbar from "./UITagbar";
import UITags from "./UITags";
import { Header} from "semantic-ui-react";
import UICoverImage from "./UICoverImage";
import { makeCdn } from "@blogchain/constants";
import { useThemeContext } from "@blogchain/components";

const UIArticleContent = ({ content }) => {
    const [ theme ] = useThemeContext();

    return (
        <>
            <UIPublisher
                name={content.related.publisher.profile.name}
                time={content.created_at}
                avatar={content.related.publisher.profile.avatar}
            />
            <Header as='h1' inverted={theme.isDark}>
                { content.title }
            </Header>

            <UITagbar tags={content.related.tags} />

            {
                content.image &&
                <UICoverImage src={makeCdn(content.image)} />
            }

            <div
                className="root-dangerous-content-html"
                style={{
                    transition: '0.5s color ease',
                    color: theme.isDark ? '#ffffff' : '#000000'
                }}
                dangerouslySetInnerHTML={{ __html: content.content }}
            />

            <UITags />
        </>
    )
};

export default UIArticleContent;