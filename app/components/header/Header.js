import { Input, Menu } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { authenticate, reauthenticate } from '@blogchain/redux/actions';
import ProfileMenu from './ProfileMenu';
import { UIMenuItemLink, UIThemeSwitcher, useThemeContext } from '@blogchain/components';

const Header = ({ isAuthenticated }) => {
    const [ theme ] = useThemeContext();

    return (
        <Menu secondary inverted={theme.isDark}>
            <Menu.Item>
                <img src={'/images/bc_300.png'} />
            </Menu.Item>

            <UIMenuItemLink name="Моя лента" href="/" as="/" />
            <UIMenuItemLink href="/editor1" as="/editor1" name="Все потоки" />
            <UIMenuItemLink href="/editor2" as="/editor2" name="Как стать автором" />

            {
                isAuthenticated &&
                <UIMenuItemLink href="/editor/create" as="/editor/create" name="Новая публикаця!" />
            }

            <Menu.Menu position='right'>
                <Menu.Item>
                    <UIThemeSwitcher />
                </Menu.Item>

                <Menu.Item>
                    <Input icon='search' placeholder='Поиск...' inverted={theme.isDark} />
                </Menu.Item>

                <ProfileMenu />
            </Menu.Menu>
        </Menu>
    )
};

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.authentication.token
});

export default connect(mapStateToProps, { authenticate, reauthenticate })(Header);
