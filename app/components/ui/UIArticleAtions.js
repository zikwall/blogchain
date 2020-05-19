import { Dropdown } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { getToken, getUser } from "@blogchain/redux/reducers";
import Link from "next/link";

const UIArticleActions = ({ id, ownerId }) => {
    const isAuthorized = useSelector(state => !!getToken(state));
    const user = useSelector(state => getUser(state));

    const onArchive = () => {

    };

    const onDownloadAs = () => {

    };

    const onTrash = () => {

    };

    const onToggleNotification = () => {

    };

    return (
        <Dropdown floating labeled button>
            <Dropdown.Menu>
                <Dropdown.Item>
                    <Link href={'/post/[id]'} as={`/post/${id}`}>
                        <a>
                            Открыть
                        </a>
                    </Link>
                </Dropdown.Item>
                {
                    (isAuthorized && ownerId === user.id) &&
                    <>
                        <Dropdown.Item description='ctrl + o'>
                            <Link href={'/editor/update/[id]'} as={`/editor/update/${id}`}>
                                <a>
                                    Редактировать
                                </a>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item text='В архив' onClick={onArchive} />
                    </>
                }
                <Dropdown.Divider />
                <Dropdown.Item text='Скачать как...' onClick={onDownloadAs} />
                {
                    isAuthorized &&
                    <Dropdown.Item text='Отключить уведомления' onClick={onToggleNotification} />
                }
                {
                    (isAuthorized && ownerId === user.id) &&
                    <>
                        <Dropdown.Divider />
                        <Dropdown.Item icon='trash' text='В корзину' onClick={onTrash} />
                    </>
                }
            </Dropdown.Menu>
        </Dropdown>
    )
};

export default UIArticleActions;