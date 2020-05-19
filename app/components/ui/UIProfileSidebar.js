import {Button, Header, Icon, Image, Label} from "semantic-ui-react";

const UIProfileSidebar = ({ user }) => {
    const avatar = !!user.profile.avatar ? user.profile.avatar : "/images/zebra_pl.jpg";

    return (
        <div style={{width: '300px'}}>
            <div style={{
                border: '1px solid rgba(0,0,0,.1)',
            }}>
                <Image
                    src={avatar}
                    size='medium'
                />

                {
                    !!user.profile.status &&
                    <div style={{
                        padding: '10px',
                    }}>
                        {user.profile.status}
                    </div>
                }

            </div>

            <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                <Header as="h1">
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <span>{user.profile.name}</span>
                    </div>
                </Header>
                <span style={{
                    fontHeight: 300,
                    fontSize: '24px',
                    lineHeight: '14px',
                }}>{user.username}</span>
            </div>

            <div style={{paddingTop: '10px', paddingBottom: '10px'}}>
                <Button animated='fade' basic fluid>
                    <Button.Content visible>Редактировать профиль</Button.Content>
                    <Button.Content hidden>Приступить</Button.Content>
                </Button>
            </div>

            {
                !!user.profile.description &&
                <div style={{paddingTop: '10px', paddingBottom: '10px'}}>
                    { user.profile.description }
                </div>
            }

            <div style={{paddingTop: '10px', paddingBottom: '10px'}}>
                {
                    !!user.profile.email &&
                    <Label basic>
                        <Icon name='send'/> {user.profile.email}
                    </Label>
                }
                {
                    !!user.profile.location &&
                    <>
                        <div style={{paddingTop: '5px'}}/>
                        <Label basic>
                            <Icon name='map marker alternate'/> Russian, Moscow
                        </Label>
                    </>
                }
            </div>
        </div>
    )
};

export default UIProfileSidebar;