import { Card } from "semantic-ui-react";
import Link from "next/link";
import { UIArticleActions, UICreatedAt, UILabelBar, UITagbar } from "@blogchain/components";

const labels = {
    ratings: 10,
    views: 23,
    bookmarks: 5,
    comments: 214
};

const UIProfileArticle = ({ content }) => {
    return (
        <Card fluid>
            <Card.Content>
                <Card.Header>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flex: 3
                    }}>
                        <div style={{
                            display: 'flex',
                            flex: 2,
                        }}>
                            <Link href={'/post/[id]'} as={`/post/${content.id}`}>
                                <a>
                                    {content.title}
                                </a>
                            </Link>
                        </div>
                        <div>
                            <UIArticleActions
                                id={content.id}
                                ownerId={content.related.publisher.id}
                            />
                        </div>
                    </div>
                </Card.Header>
                {
                    !!content.annotation &&
                    <Card.Description>
                        {content.annotation}
                    </Card.Description>
                }
            </Card.Content>

            <Card.Content extra>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    {
                        !!content.related.tags &&
                        <UITagbar tags={content.related.tags} />
                    }

                    <div>
                        <UILabelBar
                            link={`/post/${content.id}`}
                            ratings={labels.ratings}
                            views={labels.views}
                            comments={labels.comments}
                            bookmarks={labels.bookmarks}
                        />
                        <UICreatedAt time={content.created_at} />
                    </div>
                </div>
            </Card.Content>
        </Card>
    )
};

export default UIProfileArticle;