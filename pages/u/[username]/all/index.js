import { useEffect, useState } from 'react';
import { Input, Divider } from "semantic-ui-react";
import UserLayout from "@blogchain/layouts/ProfileLayout";
import { ContentClient, ProfileClient } from "@blogchain/services";
import {UIProfileArticle, UIPagination, useThemeContext} from "@blogchain/components";

const SearchBar = () => {
    const [ theme ] = useThemeContext();

    return (
        <div style={{
            paddingTop: '10px',
        }}>
            <Input icon='search' placeholder='Поиск...' fluid inverted={theme.isDark} />
            <Divider inverted={theme.isDark} />
        </div>
    )
};

const Index = ({ user, currentPage }) => {
    const [ contents, setContents ] = useState([]);
    const [ meta, setMeta ] = useState(null);

    useEffect(() => {
        (async () => {
            const { response, status } = await ContentClient.userContents(user.id, currentPage);

            if (status) {
                const { contents, meta } = response;

                setContents(contents);
                setMeta(meta)
            }
        })()
    }, [ currentPage ]);

    return (
        <UserLayout user={user}>
            <SearchBar />

            {
                contents && contents.map((content, k) => (
                    <UIProfileArticle content={content} key={k} />
                ))
            }

            {
                !!meta &&
                <UIPagination link='/u/zikwall/all' pages={meta.pages} current={currentPage} />
            }
        </UserLayout>
    )
};

Index.getInitialProps = async ({ query }) => {
    const { username, page } = query;

    if (String(username).length === 0) {
        return { statusCode: 404 }
    }

    const { response: { user }, statusCode } = await ProfileClient.profile(username);

    return {
        user,
        statusCode,
        currentPage: !!page ? page : 0,
    };
};

export default Index;