import React, { useState } from "react";
import { Header, Modal, Image } from "semantic-ui-react";
import LoginForm from "./LoginForm";

const LoginModal = ({ trigger }) => {
    const [ open, setOpen ] = useState(false);

    return (
        <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size={'tiny'}
            dimmer={'inverted'}
            trigger={trigger}
        >
            <Header icon>
                <Image src={'/images/bc_300.png'} />
                Log-in to your account
            </Header>
            <Modal.Content>
                <LoginForm onSuccess={() => setOpen(false)}/>
            </Modal.Content>
        </Modal>
    )
}

export default LoginModal;
