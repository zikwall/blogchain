import { Content } from "../../app/services";
import { Container } from 'semantic-ui-react';
import { ProtectedLayout } from "../../app/layouts";
import UICoverImage from "../../app/components/ui/UICoverImage";
import { makeCdn } from "../../app/constants";

const ContentPage = ({ content }) => {
    return (
        <ProtectedLayout>
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
    const { status, content } = await Content.GetContent(id);

    return { content: content, statusCode: status ? false : 404 }
};

export default ContentPage;