import PropTypes from 'prop-types';

const UICoverImage = ({ src, mode='cover' }) => {
    return (
        <img style={{
            width: '100%',
            height: '300px',
            objectFit: mode,
            borderRadius: '5px',
            marginTop: '10px',
            marginBottom: '10px'
        }} src={src} />

        /*<Image
            src={src}
            alt="Post cover image"
            width={808}
            height={300}
            className="post_cover_image"
            objectFit={mode}
        />*/
    )
};

UICoverImage.propTypes = {
    src: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
    mode: PropTypes.objectOf([
        'fill', 'contain', 'cover', 'none', 'scale-down'
    ])
};

export default UICoverImage;