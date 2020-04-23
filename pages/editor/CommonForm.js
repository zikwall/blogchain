import { Button, Form, Message } from "semantic-ui-react";
import { Dropzone, Editor, UICoverImage } from "../../app/components";

const CommonForm = (
    {
        title, content, image, annotation, preview,
        onSubmit, setTitle, setAnnotation, setImage, setContent
    }) => {

    return (
        <>
            {
                preview &&
                <div style={{
                    paddingBottom: '10px'
                }}>
                    <UICoverImage src={preview} />
                </div>
            }
            <Form success>
                <Form.Group>
                    <Form.Input
                        value={title}
                        onChange={(e, { name, value }) => setTitle(value)}
                        placeholder='Как думаете назвать свое твоерени?'
                        width={14}
                    />
                    <Button primary floated='right' onClick={onSubmit}>Отправить!</Button>
                </Form.Group>

                <Form.TextArea
                    value={annotation}
                    onChange={(e, { name, value }) => setAnnotation(value)}
                    label='Annonation'
                    placeholder='Tell us more about you...'
                />

                <Dropzone
                    setFiles={setImage}
                    files={image}
                />

                <Message
                    success
                    header='Form Completed'
                    content="You're all signed up for the newsletter"
                />
                <div style={{ paddingBottom: '10px' }} />
            </Form>

            <Editor
                initialValue={content}
                onChange={setContent}
            />
        </>
    )

};

export {
    CommonForm
}