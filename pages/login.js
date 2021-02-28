import { useEffect, useState } from 'react';

// next
import Head from "next/head";
import Link from "next/link";

// redux
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { authenticate } from "@blogchain/redux/actions";

// components
import { Button, Card, Image, Form, Header, Grid, Message } from 'semantic-ui-react';
import { WithoutHeaderLayout } from "@blogchain/layouts";
import { useThemeContext } from "@blogchain/components";

const Login = ({ isAuthenticated, auth }) => {
    const [ theme ] = useThemeContext();
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState({
        has: false, message: ''
    });
    const router = useRouter();

    useEffect(() => {
        if (isAuthenticated) {
            router.push('/');
        }

        return () => {}
    }, []);

    const onChangeUsername = (e) => {
        e.preventDefault();

        setUsername(e.target.value);
    };

    const onChangePassword = (e) => {
        e.preventDefault();

        setPassword(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const { status, message } = await auth({ username: username, password: password }, 'login');

        if (status === false) {
            setError({
                has: true,
                message: message
            });

            return false;
        }

        if (status === true) {
            router.push('/');
        }
    };

    return (
        <WithoutHeaderLayout>
            <Head>
                <title>Blog | Auth</title>
            </Head>

            <Grid textAlign='center' style={{ height: '85vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' textAlign='center' inverted={theme.isDark}>
                        <Image src={'/images/bc_300.png'} />

                        <span style={{marginRight: 20, marginLeft: 10, verticalAlign: 'middle'}}>
                            Log-in to your account
                        </span>
                    </Header>
                    <Card fluid className={ theme.isDark ? 'dark' : 'white' }>
                        <Card.Content>
                            {
                                error.has &&
                                <Message
                                    error
                                    header='Action Forbidden'
                                    content={error.message}
                                />
                            }
                            <Form size='large' inverted={theme.isDark}>

                                <Form.Input
                                    fluid icon='user'
                                    iconPosition='left'
                                    placeholder='E-mail address'
                                    onChange={onChangeUsername}
                                />
                                <Form.Input
                                    fluid
                                    icon='lock'
                                    iconPosition='left'
                                    placeholder='Password'
                                    type='password'
                                    onChange={onChangePassword}
                                />
                                <Button fluid onClick={onSubmit} inverted={theme.isDark}>
                                    Login
                                </Button>
                            </Form>
                        </Card.Content>
                        <Card.Content extra>
                            <ThemedLinkedText
                                isDark={theme.isDark}
                                text={'New to us? '}
                                linkText={'Sign Up'}
                                link={'/register'}
                            />
                        </Card.Content>
                        <Card.Content extra>
                            <ThemedLinkedText
                                isDark={theme.isDark}
                                text={'Forgot your password? '}
                                linkText={'To recover the password'}
                                link={'/recover'}
                            />
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid>
        </WithoutHeaderLayout>
    )
};

const ThemedLinkedText = ({ isDark, text, linkText, link }) => {
    let additionalStyles = {};

    if (isDark) {
        additionalStyles = {
            color: isDark ? '#1e70bf' : 'rgba(0,0,0,.87)'
        }
    }

    return (
        <div style={{
            color: isDark ? '#ffffff' : 'rgba(0,0,0,.87)'
        }}>
            {text}
            <Link href={link}>
                <a style={additionalStyles}>
                    {linkText}
                </a>
            </Link>
        </div>
    )
}

const mapStateToProps = (state) => (
    { isAuthenticated: !!state.authentication.token }
);

const mapDispatchToProps = dispatch => bindActionCreators({
    auth: authenticate
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
