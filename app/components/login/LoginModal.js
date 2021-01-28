import React, { useReducer, useContext } from "react";
import Link from "next/link";

// components
import { Modal, List } from "semantic-ui-react";
import LoginForm from "./LoginForm";
import styles from './Modal.module.css';

const LoginModalStateContext = React.createContext();
const LoginModalDispatchContext = React.createContext();

function modalReducer(state, action) {
    switch (action.type) {
        case 'OPEN_MODAL':
            return { ...state, open: true, countOpened: state.countOpened + 1 }
        case 'CLOSE_MODAL':
            return { ...state, open: false }
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}

export function LoginModalProvider({ children }) {
    const [ state, dispatch ] = useReducer(modalReducer, { open: false, countOpened: 0 })
    return (
        <LoginModalStateContext.Provider value={state}>
            <LoginModalDispatchContext.Provider value={dispatch}>
                {children}
            </LoginModalDispatchContext.Provider>
        </LoginModalStateContext.Provider>
    )
}

export function useLoginModalState() {
    const context = useContext(LoginModalStateContext)
    if (context === undefined) {
        throw new Error('useCountState must be used within a CountProvider')
    }
    return context
}

export function useLoginModalDispatch() {
    const context = useContext(LoginModalDispatchContext)
    if (context === undefined) {
        throw new Error('useCountDispatch must be used within a CountProvider')
    }
    return context
}

const LoginModal = ({ trigger }) => {
    const state = useLoginModalState();
    const dispatch = useLoginModalDispatch();

    const { open } = state;

    return (
        <Modal
            basic
            onClose={() => dispatch({ type: 'CLOSE_MODAL' })}
            onOpen={() => dispatch({ type: 'OPEN_MODAL' })}
            open={open}
            size={'large'}
            dimmer={'blurring'}
            trigger={trigger}
        >
            <div className={[
                styles.UnauthActionBox,
                styles.UnauthActionBox_rich
            ].join(' ')}>
                <div className={ styles.UnauthActionBox__in }>
                    <div className={ styles.UnauthActionBox__hero }>
                        <div className={ styles.UnauthActionBox__ownerPhoto } style={{
                            backgroundImage: "url(https://scontent-arn2-2.cdninstagram.com/v/t51.2885-15/sh0.08/e35/p640x640/92411819_265494314465297_7102111038156717418_n.jpg?_nc_ht=scontent-arn2-2.cdninstagram.com&_nc_cat=105&_nc_ohc=1XrXoNDqgjEAX_un1YN&tp=1&oh=01185625a481e750e2d38652f4d804f3&oe=603BA813)"}}
                        >
                        </div>
                        <div className={ styles.UnauthActionBox__header }>
                            Авторизируйтесь, чтобы читать статьи Олеси
                        </div>
                        <div className={ styles.UnauthActionBox__text }>
                            Читайте и комментируйте понравившиеся записи на её странице
                        </div>
                    </div>
                    <div className={ styles.UnauthActionBox__aside }>
                        <div className={ styles.JoinForm }>
                            <LoginForm onSuccess={() => dispatch({ type: 'CLOSE_MODAL' })} />
                            <div className={ styles.JoinForm__footer }>
                                <List link>
                                    <List.Item>New to us? <Link href='/register'><a>Sign Up</a></Link></List.Item>
                                    <List.Item>Forgot your password? <Link href='/recover'><a>To recover the password</a></Link></List.Item>
                                </List>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default LoginModal;
