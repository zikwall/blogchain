import IndexLayout from "@blogchain/layouts/IndexLayout";
import { ContentClient } from "@blogchain/services";
import { UIMostReading, UIPagination, UIArticle } from '@blogchain/components';

export default function Tag({ contents, meta, currentPage, tag, stats }) {
    return (
        <IndexLayout
            title={`Поиск по тегу ${tag} | Blogchain`}
        >
            {(Array.from(contents) || []).map((content, key) => (
                <UIArticle
                    key={key}
                    id={content.id}
                    image={content.image}
                    publisher={{
                        author: content.related.publisher.profile.name,
                        time: content.created_at,
                        avatar: content.related.publisher.profile.avatar
                    }}
                    tags={content.related.tags}
                    title={content.title}
                    text={content.annotation}
                    labels={{
                        ratings: 10,
                        views: content.id in stats ? stats[content.id] : 0,
                        bookmarks: 5,
                        comments: 214
                    }}
                />
            ))}

            <UIPagination link={`/tag/${tag}`} pages={meta.pages} current={currentPage} />
            <UIMostReading />
        </IndexLayout>
    );
}

Tag.getInitialProps = async ({ res, query }) => {
    const { tag, page } = query;
    const currentPage = !!page ? page : 0;

    const { statusCode, response } = await ContentClient.contents(tag, page);
    const { contents, meta, stats } = response;

    return { contents, meta, currentPage, stats, statusCode, tag }
};