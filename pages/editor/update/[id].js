import { ProtectedLayout } from "../../../app/layouts";
import { Container } from "semantic-ui-react";
import { useState, useEffect } from 'react';
import { Content } from "../../../app/services";
import { connect } from "react-redux";
import { makeCdn } from "../../../app/constants";
import { CommonForm } from "../CommonForm";

const EditorPage = ({ token, id, content }) => {
    const [ image, setImage ] = useState([]);
    const [ preview, setPreview ] = useState(content.image);
    const [ contents, setContents ] = useState(content.content);
    const [ titles, setTitles ] = useState(content.title);
    const [ annotation, setAnnotation ] = useState(content.annotation);

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

        const { status } = await Content.UpdateContent(id, data, token);

        if (status === false) {
            return
        }
    };

    return (
        <ProtectedLayout>
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
                />
            </Container>
        </ProtectedLayout>
    )
};

EditorPage.getInitialProps = async ({ res, query, req }) => {
    const { id } = query;
    const { status, content } = await Content.GetEditContent(id, req);

    if (status === false) {
        res.statusCode = 404;
        res.end('Not found');
        return;
    }

    return {
        id: id,
        content: content,
    }
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.authentication.token,
    user: state.authentication.user,
    token: state.authentication.token
});

export default connect(mapStateToProps)(EditorPage);
