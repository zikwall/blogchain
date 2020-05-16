import UserLayout from "@blogchain/layouts/UserLayout";
import { apiFetch } from "@blogchain/services/api";
import { UIPinned } from "@blogchain/components";

const Profile = ({ user }) => {
    return (
        <UserLayout user={user}>
            <Content />
        </UserLayout>
    )
};

// TODO move useEffect UserLayout?
Profile.getInitialProps = async ({ req, query, res }) => {
    const { username } = query;
    const response = await apiFetch(`/api/v1/profile/${username}`, {}, req);

    if (response.status === 100) {
        res.statusCode = 404;
        res.end('Not found');
        return;
    }

    return { user: response.user }
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
