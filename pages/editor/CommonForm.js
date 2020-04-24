import { useEffect, useState } from 'react';
import { Button, Form, Message } from "semantic-ui-react";
import {
    UIDropzone,
    UIEditor,
    UICoverImage,
    UITextArea,
    UISelect
} from "../../app/components";

import { Tag } from '../../app/services';

const CommonForm = (
    {
        title, content, image, annotation, preview,
        onSubmit, setTitle, setAnnotation, setImage, setContent
    }) => {

    const [ select, setSelect ] = useState(null);
    const [ search, setSearch ] = useState(null);

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

                <UITextArea
                    value={annotation}
                    onChange={(e, { name, value }) => setAnnotation(value)}
                    label='Annonation'
                    placeholder='Tell us more about you...'
                    limit={500}
                />

                <UIDropzone
                    setFiles={setImage}
                    files={image}
                />

                <UISelect
                    search={true}
                    multiple={true}
                    placeholder={'Select tags'}
                    fetcher={Tag.getTags}
                    value={select}
                    onChange={(value) => setSelect(value)}
                    onSearch={(query) => setSearch(query)}
                />

                <Message
                    success
                    header='Form Completed'
                    content="You're all signed up for the newsletter"
                />
                <div style={{ paddingBottom: '10px' }} />
            </Form>

            <UIEditor
                initialValue={content}
                onChange={setContent}
            />
        </>
    )

};

export {
    CommonForm
}