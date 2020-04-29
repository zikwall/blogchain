import IndexLayout from "../../app/layouts/IndexLayout";
import { Content } from "../../app/services";
import { UIMostReading, UIPagination, UIArticle } from '../../app/components';

export default function Tag({ contents, meta, currentPage, tagName }) {
    return (
        <IndexLayout>

            {contents.map((content, key) => (
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
                        views: 23,
                        bookmarks: 5,
                        comments: 214
                    }}
                />
            ))}

            <UIPagination link={`/tag/${tagName}`} pages={meta.pages} current={currentPage} />
            <UIMostReading />
        </IndexLayout>
    );
}

Tag.getInitialProps = async ({ res, query }) => {
    const { tag, page } = query;
    const { status, contents, meta } = await Content.GetContents(tag, page);

    return { contents: contents, meta: meta, currentPage: !!page ? page : 0, tagName: tag }
};