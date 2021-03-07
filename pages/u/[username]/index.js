import UserLayout from "@blogchain/layouts/ProfileLayout";
import { UIPinned } from "@blogchain/components";
import { ProfileClient } from '@blogchain/services';

const Profile = ({ user }) => {
    return (
        <UserLayout user={user}>
            <Content />
        </UserLayout>
    )
};

// TODO move useEffect UserLayout?
Profile.getInitialProps = async ({ query }) => {
    const { username } = query;

    if (String(username).length === 0) {
        return { statusCode: 404 }
    }

    const { response: { user }, statusCode } = await ProfileClient.profile(username);

    return { user, statusCode };
};

const Content = () => (
    <>
        <UIPinned
            items={[
                {
                    title:"Велотренажер #Самоизоляция или как угомонить ребенка на карантине",
                    labels: {
                        ratings: 10,
                        views: 23,
                        bookmarks: 5,
                        comments: 214
                    }
                },
                {
                    title:"Как мы научились делить видео на сцены с помощью хитрой математики",
                    labels: {
                        ratings: 10,
                        views: 23,
                        bookmarks: 5,
                        comments: 214
                    }
                },
                {
                    title:"Как мы научились делить видео на сцены с помощью хитрой математики",
                    labels: {
                        ratings: 10,
                        views: 23,
                        bookmarks: 5,
                        comments: 214
                    }
                },
                {
                    title:"Как мы научились делить видео на сцены с помощью хитрой математики",
                    labels: {
                        ratings: 10,
                        views: 23,
                        bookmarks: 5,
                        comments: 214
                    }
                },
                {
                    title:"Как мы научились делить видео на сцены с помощью хитрой математики",
                    labels: {
                        ratings: 10,
                        views: 23,
                        bookmarks: 5,
                        comments: 214
                    }
                },
                {
                    title:"Как мы научились делить видео на сцены с помощью хитрой математики",
                    labels: {
                        ratings: 10,
                        views: 23,
                        bookmarks: 5,
                        comments: 214
                    }
                }
            ]}
        />
    </>
);

export default Profile;
