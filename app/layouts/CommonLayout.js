import Head from "next/head";

// redux
import { useSelector } from "react-redux";
import { getToken } from "@blogchain/redux/reducers";

// components
import { Container, Menu, Icon, Button, Image } from 'semantic-ui-react';
import { Header, LoginPageBottomSheet, UnauthDummy, UIMenuItemLink } from "@blogchain/components";

const CommonLayout = ({ children, title }) => {
    const token = useSelector(state => getToken(state));

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <Header/>

            <main className="app root-content">
                { children }
            </main>

            <LoginPageBottomSheet />

            <Container fluid>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <div>
                        <Menu text>
                            <Menu.Item header>
                                <span style={{ paddingRight: '5px' }}>Crafted with</span> <Icon name='heart outline' /> by zikwall
                            </Menu.Item>
                            <UIMenuItemLink name="О Сайте" href="/" />
                            <UIMenuItemLink name="Служба поддержки" href="/" />
                            <UIMenuItemLink name="Мобильные приложения" href="/" />
                        </Menu>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            paddingRight: '20px'
                        }}>
                            <div style={{ paddingRight: '5px' }}>
                                <Image src="/images/google.png" size="tiny" />
                            </div>
                            <div style={{ paddingRight: '5px' }}>
                                <Image src="/images/ios.png" size="tiny" />
                            </div>
                        </div>
                        <div>
                            <Button circular color='facebook' icon='facebook' />
                            <Button circular color='twitter' icon='twitter' />
                            <Button circular color='linkedin' icon='linkedin' />
                            <Button circular color='google plus' icon='google plus' />
                        </div>
                    </div>
                </div>
            </Container>

            <UnauthDummy visible={!token} />
        </>
    )
};

export default CommonLayout;
