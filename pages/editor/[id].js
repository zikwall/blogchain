import { Content } from "@blogchain/services";
import { Container } from 'semantic-ui-react';
import { ProtectedLayout } from "@blogchain/layouts";
import { UICoverImage } from "@blogchain/components";
import { makeCdn } from "@blogchain/constants";

const ContentPage = ({ content }) => {
    return (
        <ProtectedLayout
            title={`Просмотр контента ${content.title}`}
        >
            <Container>
                {
                    content.image &&
                    <UICoverImage src={makeCdn(content.image)} />
                }
                <div className="root-dangerous-content-html" dangerouslySetInnerHTML={{ __html: content.content }} />
            </Container>
        </ProtectedLayout>
    )
};

ContentPage.getInitialProps = async ({ res, query }) => {
    const { id } = query;
    const { status, content, statusCode } = await Content.GetContent(id);

    return { content: content, statusCode: statusCode }
};

export default ContentPage;