import React, { useState } from "react";
import Link from "next/link";
import { Button, Form, Card, Message } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { authenticate } from "@blogchain/redux/actions";

const LoginForm = ({ onSuccess }) => {
    const dispatch = useDispatch();
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState({
        has: false, message: ''
    });

    const auth = (username, password) => {
        return dispatch(authenticate({ username: username, password: password }));
    }

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
        const { status, message } = await auth(username, password);

        if (status === false) {
            setError({
                has: true,
                message: message
            });

            return false;
        }

        setError({
            has: false,
            message: message
        });

        onSuccess && onSuccess();
    };

    return (
        <Card fluid>
            <Card.Content>
                {
                    error.has &&
                    <Message
                        error
                        header='Action Forbidden'
                        content={error.message}
                    />
                }
                <Form size='large'>
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
                    <Button fluid onClick={onSubmit} color={'green'} >
                        Login
                    </Button>
                </Form>
            </Card.Content>
            <Card.Content extra>
                New to us? <Link href='/register'><a>Sign Up</a></Link>
            </Card.Content>
            <Card.Content extra>
                Forgot your password? <Link href='/recover'><a>To recover the password</a></Link>
            </Card.Content>
        </Card>
    )
}

export default LoginForm;