import React, { useState } from 'react';

// next
import { useRouter } from "next/router";

// redux
import { useDispatch } from 'react-redux';
import { authenticate } from "@blogchain/redux/actions";

// components
import classNames from 'classnames';
import { Button, Card, Form, List, Message } from "semantic-ui-react";
import styles from './QuickLogin.module.css';
import Link from "next/link";

const QuickLogin = ({ login }) => {
    const dispatch = useDispatch();
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState({
        has: false, message: ''
    });

    const router = useRouter();

    const auth = (username, password) => {
        return dispatch(authenticate({ username: username, password: password }));
    }

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const { status, message } = await auth(username, password);

        if (status === false) {
            setError({
                has: true,
                message: 'Incorrect login or password'
            });

            return false;
        }
    };

    return (
        <Card.Content>
            {
                error.has &&
                <Message
                    size='mini'
                    compact
                    error
                    content={error.message}
                />
            }
            <Form size='small'>
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

                <Button fluid basic size={'tiny'} content='Войти' onClick={ onSubmit } />
                <div className={ styles.quick_login_spacebetween } />
            </Form>

            <Button size={'tiny'} animated='fade' fluid color={'orange'} onClick={() => {
                router.push('/register')
            }}>
                <Button.Content visible>Зарегистрироваться</Button.Content>
                <Button.Content hidden>Прямо сейчас!</Button.Content>
            </Button>

            <Card.Content extra>
                <div className={ styles.quick_login_footer }>
                    <List link>
                        <List.Item><Link href='/recover'><a>Забыли пароль?</a></Link></List.Item>
                    </List>
                </div>
            </Card.Content>

        </Card.Content>
    )
};

export default QuickLogin;
