import { useState } from 'react';
import { Dropdown, Image, Menu } from "semantic-ui-react";
import { connect } from 'react-redux';
import { deauthenticate } from '../../redux/actions';
import { bindActionCreators } from "redux";
import AuthItem from "./AuthItem";
import QuickLogin from "./QuickLogin";
import CloseWrapper from "../close/CloseWrapper";
import UIDropdownItemLink from "../ui/UIDropdownItemLink";

const ProfileMenu = ({ isAuthenticated, logout, user }) => {
    const [ isDropped, setIsDropped ] = useState(false);
    const onOutsideOrEscape = () => {
        setIsDropped(false);
    };

    if (!isAuthenticated) {
        return (
            <>
                <Menu.Item
                    onClick={() => {
                        setIsDropped(!isDropped)
                    }}>

                    <AuthItem />
                </Menu.Item>

                <CloseWrapper onEscapeOutside={ onOutsideOrEscape }>
                    <QuickLogin visible={isDropped} />
                </CloseWrapper>
            </>
        )
    }

    const trigger = (
        <span>
            <Image avatar src={'https://avatars1.githubusercontent.com/u/23422968?s=460&u=2b4cedc533303cca1599e8785c1f33462251ae9a&v=4'} />
            { user.profile.name }
        </span>
    );

    return (
        <Menu.Item>
            <Dropdown trigger={trigger} pointing='top right'>
                <Dropdown.Menu pointing secondary>
                    <Dropdown.Item text={
                        <span>
                         Авторизированы как <strong>{ user.username }</strong>
                    </span>
                    } disabled/>

                    <UIDropdownItemLink name='Мой профиль' href={'/u/[username]'} as={`/u/${user.username}`} />
                    <UIDropdownItemLink name='Новый пост' href='/editor/create' />
                    <UIDropdownItemLink name='Мои звезды' href={'/u/[username]/stars'} as={`/u/${user.username}/stars`} />
                    <UIDropdownItemLink name='Публикации' href={'/u/[username]/all'} as={`/u/${user.username}/all`} />
                    <UIDropdownItemLink name='Диалоги' href='/dialogs' />
                    <UIDropdownItemLink name='Закладки' href='/bookmarks' />
                    <UIDropdownItemLink name='Помощь' href='/help' />
                    <UIDropdownItemLink name='Настройки' href='/settings' />

                    <Dropdown.Divider />

                    <Dropdown.Item text='Выйти' onClick={() => logout()}/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    )
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.authentication.token,
    user: state.authentication.user
});

const mapDispatchToProps = dispatch => bindActionCreators({
    logout: deauthenticate
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(ProfileMenu);
