import { ProtectedLayout } from "../../../app/layouts";
import { Container } from "semantic-ui-react";
import { useState, useEffect } from 'react';
import { Content } from "../../../app/services";
import { connect } from "react-redux";
import { CommonForm } from "../CommonForm";

const CreatePage = ({ token }) => {
    const [ image, setImage ] = useState([]);
    const [ preview, setPreview ] = useState('');
    const [ contents, setContents ] = useState('');
    const [ titles, setTitles ] = useState('');
    const [ annotation, setAnnotation ] = useState('');
    const [ tags, setTags ] = useState([]);

    useEffect(() => {
        if (typeof image[0] !== 'undefined') {
            setPreview(image[0].preview)
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

        const { status } = await Content.CreateContent(data, token);

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
                    setTags={setTags}
                    tags={tags}
                />
            </Container>
        </ProtectedLayout>
    )
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.authentication.token,
    user: state.authentication.user,
    token: state.authentication.token
});

export default connect(mapStateToProps)(CreatePage);
