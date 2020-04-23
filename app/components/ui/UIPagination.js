import {Button} from "semantic-ui-react";

const UIPagination = () => (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
        <div>
            <Button.Group>
                <Button labelPosition='left' icon='left chevron' content='Туда' />
                <Button labelPosition='right' icon='right chevron' content='Сюда' />
            </Button.Group>
        </div>
        <div>
            <Button.Group>
                <Button icon>
                    1
                </Button>
                <Button icon>
                    2
                </Button>
                <Button icon>
                    3
                </Button>
                <Button icon>
                    4
                </Button>
                <Button icon>
                    5
                </Button>
            </Button.Group>{' '}

            <Button.Group>
                <Button icon>
                    10
                </Button>
                <Button icon>
                    20
                </Button>
                <Button icon>
                    30
                </Button>
            </Button.Group>
        </div>
    </div>
);

export default UIPagination;