import { Content } from "../../app/services";
import { Container } from 'semantic-ui-react';
import { ProtectedLayout } from "../../app/layouts";

const ContentPage = ({ content }) => {

    return (
        <ProtectedLayout>
            <Container>
                <div className="root-dangerous-content-html" dangerouslySetInnerHTML={{ __html: content }} />
            </Container>
        </ProtectedLayout>
    )
};

ContentPage.getInitialProps = async ({ res, query }) => {
    const { id } = query;
    const { status, content, title, user } = await Content.GetContent(id);

    if (status === false) {
        res.statusCode = 404;
        res.end('Not found');
        return;
    }

    return { content: content }
};

export default ContentPage;