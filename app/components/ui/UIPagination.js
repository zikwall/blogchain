import { useCallback } from "react";
import { Button, Pagination } from "semantic-ui-react";
import { useRouter } from 'next/router';
import { useThemeContext } from "@blogchain/components";

const UIPagination = ({ link, pages, current }) => {
    if (pages <= 0) {
        return null;
    }

    const router = useRouter();
    const [ theme ] = useThemeContext();

    const navigate = useCallback(async (page) => {
        await router.push(`${link}?page=${page}`);
    }, [ router ]);

    const onPaginate = useCallback(async (e, { activePage }) => {
        await navigate(activePage);
    }, []);

    const onPressNext = () => {
        if (current >= pages - 1) {
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
                <Button.Group basic inverted={theme.isDark}>
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
                <Pagination
                    inverted={theme.isDark}
                    boundaryRange={1}
                    siblingRange={1}
                    ellipsisItem={null}
                    firstItem={null}
                    lastItem={null}
                    defaultActivePage={current}
                    activePage={current}
                    totalPages={pages}
                    onPageChange={onPaginate}
                />
            </div>
        </div>
    )
};

export default UIPagination;