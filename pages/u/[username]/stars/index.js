import UserLayout from "@blogchain/layouts/UserLayout";
import { ProfileClient } from "@blogchain/services";

const Index = ({ user }) => {
    return (
        <UserLayout user={user}>
            Звезды
        </UserLayout>
    )
};

Index.getInitialProps = async ({ query }) => {
    const { username } = query;
    const { user, statusCode } = await ProfileClient.profile(username);

    return { user, statusCode };
};

export default Index;