import UIPublisher from "./UIPublisher";
import UITagbar from "./UITagbar";
import UITags from "./UITags";
import { Header} from "semantic-ui-react";
import UICoverImage from "./UICoverImage";
import { makeCdn } from "@blogchain/constants";

const UIArticleContent = ({ content }) => {

    return (
        <>
            <UIPublisher
                name={content.related.publisher.profile.name}
                time={content.created_at}
                avatar={content.related.publisher.profile.avatar}
            />
            <Header as='h1'>
                { content.title }
            </Header>

            <UITagbar tags={content.related.tags} />

            {
                content.image &&
                <UICoverImage src={makeCdn(content.image)} />
            }

            <div
                className="root-dangerous-content-html"
                dangerouslySetInnerHTML={{ __html: content.content }}
            />

            <UITags />
        </>
    )
};

export default UIArticleContent;