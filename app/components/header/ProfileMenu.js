import { Dropdown, Image, Menu, Popup } from "semantic-ui-react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import AuthItem from "@blogchain/components/login/AuthItem";
import QuickLogin from "@blogchain/components/login/QuickLogin";
import { deauthenticate } from '@blogchain/redux/actions';
import UIDropdownItemLink from "@blogchain/components/ui/UIDropdownItemLink";
import { useThemeContext } from "@blogchain/components";

const ProfileMenu = ({ isAuthenticated, logout, user }) => {
    const [ theme ] = useThemeContext();

    if (!isAuthenticated) {
        return (
            <>
                <Popup
                    inverted={theme.isDark}
                    content={
                        <QuickLogin />
                    }
                    on='click'
                    position='bottom right'
                    trigger={
                        <Menu.Item>
                            <AuthItem />
                        </Menu.Item>
                    }
                />
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
                <Dropdown.Menu pointing="true" secondary="true">
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
