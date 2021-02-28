import { Modal, Image, Button, Icon, Label, Input } from "semantic-ui-react";
import { useThemeContext } from "@blogchain/components";

const UIPinsModal = () => {
    const [ theme ] = useThemeContext();
    const additionalProps = {};

    if (theme.isDark) {
        additionalProps['color'] = 'black';
    } else {
        additionalProps['basic'] = true;
    }

    return (
        <Modal
            size={'tiny'}
            dimmer={'blurring'}
            trigger={
                <Label as='a' {...additionalProps}>
                    Customize your pins
                </Label>
            }>
            <Modal.Header>
                Edit pinned items
            </Modal.Header>
            <Modal.Content>
                <span>Select up to six public repositories or gists you’d like to show.</span>
                <div style={{
                    paddingTop: '10px'
                }}>
                    <Input fluid loading icon='user' placeholder='Search...' />
                </div>
            </Modal.Content>
            <Modal.Content scrolling>
                <Modal.Description>
                    {[...new Array(15)].map((v, i) => (
                        <Image
                            key={i}
                            src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
                            style={{ paddingBottom: 5 }}
                        />
                    ))}
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button primary>
                    Save Pins <Icon name='chevron right' />
                </Button>
            </Modal.Actions>
        </Modal>
    )
};

export default UIPinsModal;