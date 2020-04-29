import React from "react";
import { Button } from "semantic-ui-react";
import { useRouter, withRouter } from 'next/router';
import Link from 'next/link';

const ActivePaginationButton = withRouter(({ link, page, router }) => {
    const href = `${link}?page=${page}`;

    return (
        <Link href={href}>
            <Button
                icon
                active={(router.asPath === href)}
            >
                {page + 1}
            </Button>
        </Link>
    )
});

const UIPagination = ({ link, pages, current }) => {
    if (pages <= 0) {
        return null;
    }

    const router = useRouter();

    const renderButtons = () => {
        return [...new Array(pages)].map((v, k) => (
            <ActivePaginationButton page={k} link={link}/>
        ))
    };

    const navigate = (page) => {
        router.push(`${link}?page=${page}`);
    };

    const onPressNext = () => {
        if (current >= pages) {
            return;
        }

        return navigate(++current);
    };

    const onPressPrev = () => {
        if (current <= 0) {
            return;
        }

        return navigate(--current);
    };

    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',}}>
            <div>
                <Button.Group>
                    <Button
                        labelPosition='left'
                        icon='left chevron'
                        content='Туда'
                        onClick={onPressPrev}
                    />
                    <Button
                        labelPosition='right'
                        icon='right chevron'
                        content='Сюда'
                        onClick={onPressNext}
                    />
                </Button.Group>
            </div>
            <div>
                <Button.Group>
                    {renderButtons()}
                </Button.Group>{' '}

                {/*<Button.Group>
                <Button icon>
                    10
                </Button>
                <Button icon>
                    20
                </Button>
                <Button icon>
                    30
                </Button>
            </Button.Group>*/}
            </div>
        </div>
    )
};

export default UIPagination;