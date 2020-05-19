import { useEffect, useState } from 'react';
import { Input, Divider } from "semantic-ui-react";
import UserLayout from "@blogchain/layouts/UserLayout";
import { ContentClient, ProfileClient } from "@blogchain/services";
import { UIProfileArticle } from "@blogchain/components";

const SearchBar = () => (
    <div style={{
        paddingTop: '10px',
    }}>
        <Input icon='search' placeholder='Поиск...' fluid />
        <Divider />
    </div>
);

const Index = ({ user }) => {
    const [ contents, setContents ] = useState([]);

    useEffect(() => {
        ContentClient.userContents(user.id).then(({ contents }) => {
            setContents(contents);
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
        </UserLayout>
    )
};

Index.getInitialProps = async ({ query }) => {
    const { username } = query;
    const { user, statusCode } = await ProfileClient.profile(username);

    return { user, statusCode };
};

export default Index;