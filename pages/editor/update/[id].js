import { ProtectedLayout } from "@blogchain/layouts";
import { Container } from "semantic-ui-react";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ContentClient } from "@blogchain/services";
import { connect } from "react-redux";
import { makeCdn, SESSION_TOKEN_KEY } from "@blogchain/constants";
import { CommonForm } from "@blogchain/components/editor/CommonForm";
import { Cookie } from "@blogchain/help";

const EditorPageInner = ({ token, id, content }) => {
    const [ image, setImage ] = useState([]);
    const [ preview, setPreview ] = useState(makeCdn(content.image));
    const [ contents, setContents ] = useState(content.content);
    const [ titles, setTitles ] = useState(content.title);
    const [ annotation, setAnnotation ] = useState(content.annotation);
    const [ tags, setTags ] = useState(!!content.related.tags ? content.related.tags.map(v => v.id) : []);

    const router = useRouter();

    useEffect(() => {
        if (typeof image[0] !== 'undefined') {
            setPreview(image[0].preview)
        } else if (!!content.image) {
            setPreview(makeCdn(content.image))
        }
    }, [image]);

    const onSubmit = async (e) => {
        const data = new FormData();

        if (image.length > 0) {
            data.append('image', image[0]);
        }

        data.append('title', titles);
        data.append('content', contents);
        data.append('annotation', annotation);
        data.append('tags', JSON.stringify(tags));

        const { status } = await Content.UpdateContent(id, data, token);

        if (status === false) {
            return
        }

        router.push(`/editor/${id}`);
    };

    return (
        <Container>
            <CommonForm
                title={titles}
                content={contents}
                annotation={annotation}
                image={image}
                preview={preview}
                onSubmit={onSubmit}
                setTitle={setTitles}
                setContent={setContents}
                setAnnotation={setAnnotation}
                setImage={setImage}
                setTags={setTags}
                tags={tags}
            />
        </Container>
    )
};

const EditorPage = ({ token, id, content }) => {
    return (
        <ProtectedLayout
            title={`Обновление контента ${content.title}`}
        >
            <EditorPageInner
                token={token}
                content={content}
                id={id}
            />
        </ProtectedLayout>
    )
};

EditorPage.getInitialProps = async ({ res, query, req }) => {
    const { id } = query;
    const token = Cookie.getCookie(SESSION_TOKEN_KEY, req);
    const { status, content, statusCode } = await ContentClient.own(id, token);

    return {
        id: id,
        content: content,
        statusCode: statusCode
    }
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.authentication.token,
    user: state.authentication.user,
    token: state.authentication.token
});

export default connect(mapStateToProps)(EditorPage);
