import IndexLayout from "@blogchain/layouts/IndexLayout";
import { Content } from "@blogchain/services";
import { UIMostReading, UIPagination, UIArticle } from '@blogchain/components';

export default function Index({ contents, meta, currentPage }) {
    return (
        <IndexLayout
            title={'Blogchain | Ваш лучший блогер'}
        >

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

            <UIPagination link='/' pages={meta.pages} current={currentPage} />
            <UIMostReading />
        </IndexLayout>
    );
}

Index.getInitialProps = async ({ res, query }) => {
    const { page } = query;
    const { status, contents, meta, statusCode } = await Content.GetContents(null, page);

    return {
        contents: contents,
        meta: meta,
        currentPage: !!page ? page : 0,
        statusCode: statusCode
    }
};