import { useEffect, useState } from 'react';
import { Input, Divider } from "semantic-ui-react";
import UserLayout from "@blogchain/layouts/UserLayout";
import { ContentClient, ProfileClient } from "@blogchain/services";
import { UIProfileArticle, UIPagination } from "@blogchain/components";

const SearchBar = () => (
    <div style={{
        paddingTop: '10px',
    }}>
        <Input icon='search' placeholder='Поиск...' fluid />
        <Divider />
    </div>
);

const Index = ({ user, currentPage }) => {
    const [ contents, setContents ] = useState([]);
    const [ meta, setMeta ] = useState(null);

    useEffect(() => {
        ContentClient.userContents(user.id, currentPage).then(({ contents, meta }) => {
            setContents(contents);
            setMeta(meta)
        });
    }, []);

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
    const { user, statusCode } = await ProfileClient.profile(username);

    return {
        user,
        statusCode,
        currentPage: !!page ? page : 0,
    };
};

export default Index;