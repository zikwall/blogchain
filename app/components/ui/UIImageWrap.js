import Image from 'next/image';

const UIImageWrap = ({ src }) => (
    <div style={{ paddingBottom: '10px' }}>
        {/*<Image rounded src={src} centered />*/}
        <Image
            src={src}
            alt="Company cover image"
            width={1127}
            height={256}
            className="ui centered rounded image"
        />
    </div>
);

export default UIImageWrap;