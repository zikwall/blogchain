import { useEffect } from 'react';
import { useDropzone } from "react-dropzone";

const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    width: 100,
    height: 100,
    padding: 4,
    boxSizing: 'border-box'
};

const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};

const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16
};

function Dropzone({ setFiles, files }) {
    const {getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                    src={file.preview}
                    style={img}
                />
            </div>
        </div>
    ));

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <section style={{
            width: '300px'
        }}>
            <div {...getRootProps({className: 'dropzone'})} multiple={false}>
                <input {...getInputProps()} multiple={false} />
                <p style={{
                    padding: '10px',
                    border: '3px solid #f0f1f4',
                    borderRadius: '5px',
                    borderStyle: 'dashed',
                }}>Drag 'n' drop image here, or click to select image</p>
            </div>
            <aside style={thumbsContainer}>
                {thumbs}
            </aside>
        </section>
    );
}

export default Dropzone;