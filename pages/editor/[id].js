import { ContentClient } from "@blogchain/services";
import { Container } from 'semantic-ui-react';
import { ProtectedLayout } from "@blogchain/layouts";
import { UICoverImage } from "@blogchain/components";
import { makeCdn, SESSION_TOKEN_KEY } from "@blogchain/constants";
import { Cookie } from "@blogchain/help";

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

ContentPage.getInitialProps = async ({ res, query, req }) => {
    const { id } = query;
    const token = Cookie.getCookie(SESSION_TOKEN_KEY, req);
    const { status, content, statusCode } = await ContentClient.own(id, token);

    return { content: content, statusCode: statusCode }
};

export default ContentPage;