import { useState } from 'react';
import { useRouter } from "next/router";
import { connect } from 'react-redux';
import classNames from 'classnames';
import { authenticate } from "../../redux/actions";
import { Message } from "semantic-ui-react";
import { bindActionCreators } from "redux";

const QuickLogin = ({ visible, login }) => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState({
        has: false, message: ''
    });

    const router = useRouter();

    const dropClassNames = classNames({
        'shown': visible
    });

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onSubmit = async () => {
        const { status, message } = login({ username: username, password: password }, 'login');

        if (status === 100) {
            setError({
                has: true,
                message: message
            });

            return false;
        }
    };

    return (
        <div id="top_profile_menu" className={ dropClassNames }>
            <div className="quick_login">
                {
                    error.has &&
                    <Message
                        error
                        content={error.message}
                    />
                }
                <form name="login">
                    <div className="label">Телефон или email</div>
                    <div className="labeled">
                        <input
                            type="text"
                            name="email"
                            className="dark"
                            onChange={ onChangeUsername }
                            value={ username }
                        />
                    </div>
                    <div className="label">Пароль</div>
                    <div className="labeled">
                        <input
                            type="password"
                            name="pass"
                            className="dark"
                            onChange={ onChangePassword }
                            value={ password }
                        />
                    </div>
                </form>
                <button onClick={ onSubmit } className="flat_button button_wide">Войти</button>
                <button onClick={() => router.push('/register')} className="flat_button button_wide login_reg_button">Регистрация</button>
                <div className="clear forgot">
                    <a className="quick_forgot" target="_top" onClick={(e) => {
                        e.preventDefault();
                        router.push('/restore');
                    }}>
                        Забыли пароль?
                    </a>
                </div>
            </div>
        </div>
    )
};

const mapDispatchToProps = dispatch => bindActionCreators({
    login: authenticate
}, dispatch);

export default connect(state => state, mapDispatchToProps)(QuickLogin);
