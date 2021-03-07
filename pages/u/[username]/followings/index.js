import UserLayout from "@blogchain/layouts/ProfileLayout";
import { ProfileClient } from "@blogchain/services";

const Index = ({ user }) => {
    return (
        <UserLayout user={user}>
            Подписки
        </UserLayout>
    )
};

Index.getInitialProps = async ({ query }) => {
    const { username } = query;

    if (String(username).length === 0) {
        return { statusCode: 404 }
    }

    const { response: { user }, statusCode } = await ProfileClient.profile(username);

    return { user, statusCode };
};

export default Index;