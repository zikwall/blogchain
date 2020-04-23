import Article from "../app/components/Article";
import IndexLayout from "../app/layouts/IndexLayout";
import { Content } from "../app/services";
import { UIMostReading, UIPagination } from '../app/components';

export default function Index({ contents }) {
    return (
        <IndexLayout>

            {contents.map((content, key) => (
                <Article
                    key={key}
                    image={content.image}
                    publisher={{
                        author: content.related.publisher.profile.name,
                        time: content.created_at,
                        avatar: content.related.publisher.profile.avatar
                    }}
                    tags={[
                        "Разработка под Arduino",
                        "Периферия",
                        "DIY или Сделай сам"
                    ]}
                    title={content.title}
                    text={content.annotation}
                    labels={{
                        ratings: 10,
                        views: 23,
                        bookmarks: 5,
                        comments: 214
                    }}
                />
            ))}

            <UIPagination />
            <UIMostReading />
        </IndexLayout>
    );
}

Index.getInitialProps = async ({ res }) => {
    const { status, contents } = await Content.GetContents();

    return { contents: contents }
};