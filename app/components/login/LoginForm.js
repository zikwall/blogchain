import React, { useState } from "react";

// redux
import { useDispatch } from "react-redux";
import { authenticate } from "@blogchain/redux/actions";

// components
import { Button, Form, Message } from "semantic-ui-react";

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
        <>
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
        </>
    )
}

export default LoginForm;