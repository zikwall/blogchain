import { useState } from 'react';
import dynamic from 'next/dynamic';

const QuillNoSSRWrapper = dynamic(
    import('react-quill'), { ssr: false, loading: () => <p>Loading ...</p> }
);

const defModules = {
    toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }, { 'font': [] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'script': 'sub'}, { 'script': 'super' }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'align': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image', 'video', 'formula'],
        ['clean'],
        ['code-block'],

    ],
    syntax: true,
};

const defFormats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video', 'code-block', 'formula', 'script', 'super', 'sub', 'color', 'background', 'align'
];

const UIEditor = ({ modules, formats, onChange, initialValue }) => {
    formats = [ ...defFormats, ...formats ];
    modules = { ...defModules, ...modules };

    const onOverrideChange = (value) => {
        onChange(value);
    };

    return (
        <QuillNoSSRWrapper
            modules={modules}
            formats={formats}
            value={initialValue}
            onChange={onOverrideChange}
        />
    );
};

UIEditor.defaultProps = {
    formats: [],
    modules: {},
    onChange: () => {},
    initialValue: ''
};

export default UIEditor;
