import { useSelector } from "react-redux";
import { Button, Header, Icon, Image, Label } from "semantic-ui-react";
import { getToken, getUser } from "@blogchain/redux/reducers";
import { useThemeContext } from "@blogchain/components";

const UIProfileImage = ({ status, avatar }) => (
    <div style={{
        border: '1px solid rgba(0,0,0,.1)',
    }}>
        <Image
            src={avatar}
            size='medium'
        />

        {
            !!status &&
            <div style={{
                padding: '10px',
            }}>
                {status}
            </div>
        }

    </div>
);

const UIProfileName = ({ name, username }) => {
    const [ theme ] = useThemeContext();

    return (
        <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
            <Header as="h1" inverted={theme.isDark}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <span>{name}</span>
                </div>
            </Header>
            <span style={{
                fontHeight: 300,
                fontSize: '24px',
                lineHeight: '14px',
                color: theme.isDark ? '#ffffff' : '#000000'
            }}>{username}</span>
        </div>
    )
};

const UIProfileEditButton = ({ id }) => {
    const isAuthorized = useSelector(state => !!getToken(state));
    const authorizedUser = useSelector(state => getUser(state));
    const [ theme ] = useThemeContext();

    return (

        (isAuthorized && authorizedUser.id === id) &&
        <>
            <div style={{paddingTop: '10px', paddingBottom: '10px'}}>
                <Button animated='fade' basic fluid inverted={theme.isDark}>
                    <Button.Content visible>Редактировать профиль</Button.Content>
                    <Button.Content hidden>Приступить</Button.Content>
                </Button>
            </div>
        </>
    )
};

const UIProfileDescription = ({ description }) => {
    const [ theme ] = useThemeContext();

    return (
        !!description &&
        <div style={{ paddingTop: '10px', paddingBottom: '10px', color: theme.isDark ? '#ffffff' : '#000000' }}>
            { description }
        </div>
    )
};

const UIProfileLocationWithContacts = ({ email, location }) => {
    const [ theme ] = useThemeContext();
    const additionalProps = {};

    if (theme.isDark) {
        additionalProps['color'] = 'black';
    } else {
        additionalProps['basic'] = true;
    }

    return (
        <div style={{paddingTop: '10px', paddingBottom: '10px'}}>
            {
                !!email &&
                <Label {...additionalProps}>
                    <Icon name='send'/> {email}
                </Label>
            }
            {
                !!location &&
                <>
                    <div style={{paddingTop: '5px'}}/>
                    <Label {...additionalProps}>
                        <Icon name='map marker alternate'/> { location }
                    </Label>
                </>
            }
        </div>
    )
};

const UIProfileSidebar = ({ user }) => {
    const avatar = !!user.profile.avatar ? user.profile.avatar : "/images/zebra_pl.jpg";

    return (
        <div style={{width: '300px'}}>
            <UIProfileImage
                avatar={avatar}
                status={user.profile.status}
            />

            <UIProfileName
                username={user.username}
                name={user.profile.name}
            />

            <UIProfileEditButton
                id={user.id}
            />

            <UIProfileDescription
                description={user.profile.description}
            />

            <UIProfileLocationWithContacts
                email={user.profile.email}
                location={user.profile.location}
            />
        </div>
    )
};

export default UIProfileSidebar;