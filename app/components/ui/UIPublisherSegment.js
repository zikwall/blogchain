import { Button, Header } from "semantic-ui-react";
import Image from 'next/image';

const ObjectComponent = ({ src, title, subTitle }) => (
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    }}>
        <div style={{
            paddingRight: '10px'
        }}>
            {/*<Image rounded src={src} size='tiny' />*/}
            <Image
                src={src}
                alt="Publisher avatar"
                width={80}
                height={80}
                className="ui tiny rounded image"
            />
        </div>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <div>
                <Header as={'a'}>
                    { title }
                </Header>
            </div>
            <span>
                { subTitle }
            </span>
        </div>
    </div>
);

const UIPublisherSegment = ({ src, title, subTitle }) => (
    <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }}>
        <div>
            <ObjectComponent
                src={src}
                title={title}
                subTitle={subTitle}
            />
        </div>
        <div>
            <Button basic color='green'>
                Подписаться
            </Button>
        </div>
    </div>
);

export default UIPublisherSegment;