import PropTypes from 'prop-types';

const UICoverImage = ({ src, mode='cover' }) => {
    return (
        <img style={{
            width: '100%',
            height: '300px',
            objectFit: mode,
            borderRadius: '5px'
        }} src={src} />
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