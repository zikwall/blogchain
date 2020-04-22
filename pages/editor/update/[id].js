import { Editor, Dropzone } from "../../../app/components";
import { ProtectedLayout } from "../../../app/layouts";
import { Container, Form, Message, Button } from "semantic-ui-react";
import { useState } from 'react';
import { Content } from "../../../app/services";
import { connect } from "react-redux";

const EditorPage = ({ token, id, content }) => {
    const [files, setFiles] = useState([]);

    const [ contents, setContents ] = useState(content.content);
    const [ titles, setTitles ] = useState(content.title);

    const onSubmit = async (e) => {
        const data = new FormData();

        if (files.length > 0) {
            data.append('image', files[0]);
        }

        data.append('title', titles);
        data.append('content', contents);

        const { status } = await Content.UpdateContent(id, data, token);

        if (status === false) {
            alert('Opps');
            return
        }
    };

    return (
        <ProtectedLayout>
            <Container>
                <Form success>
                    <Form.Group>
                        <Form.Input value={titles} onChange={(e, { name, value }) => setTitles(value)} placeholder='Как думаете назвать свое твоерени?' width={14}/>
                        <Button primary floated='right' onClick={onSubmit}>Отправить!</Button>
                    </Form.Group>
                    <Form.TextArea label='Annonation' placeholder='Tell us more about you...' />

                    <Dropzone
                        setFiles={setFiles}
                        files={files}
                    />

                    <Message
                        success
                        header='Form Completed'
                        content="You're all signed up for the newsletter"
                    />
                    <div style={{ paddingBottom: '10px' }} />
                </Form>
                <Editor initialValue={contents}
                    onChange={setContents}
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
