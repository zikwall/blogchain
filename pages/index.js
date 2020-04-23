import {
    Icon,
    Label,
    Header,
    Button,
    Divider
} from 'semantic-ui-react';
import Article from "../app/components/Article";
import IndexLayout from "../app/layouts/IndexLayout";
import { Content } from "../app/services";
import { Time } from "../app/utils";

export default function Index({ contents }) {

    return (
        <IndexLayout>

            {contents.map((content, key) => (
                <Article
                    key={key}
                    image={content.image}
                    publisher={{
                        author: content.related.publisher.profile.name,
                        time: Time.toJsUnix(content.created_at),
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

            <BottomPagination />
            <MostReading />
        </IndexLayout>
    );
}


const BottomPagination = () => (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
        <div>
            <Button.Group>
                <Button labelPosition='left' icon='left chevron' content='Туда' />
                <Button labelPosition='right' icon='right chevron' content='Сюда' />
            </Button.Group>
        </div>
        <div>
            <Button.Group>
                <Button icon>
                    1
                </Button>
                <Button icon>
                    2
                </Button>
                <Button icon>
                    3
                </Button>
                <Button icon>
                    4
                </Button>
                <Button icon>
                    5
                </Button>
            </Button.Group>{' '}

            <Button.Group>
                <Button icon>
                    10
                </Button>
                <Button icon>
                    20
                </Button>
                <Button icon>
                    30
                </Button>
            </Button.Group>
        </div>
    </div>
);

const MostReadingLabels = ({ ups, views, bookmarks, comments }) => (
    <>
        <Label basic>
            <Icon name='arrow up' /> { ups }
        </Label>
        <Label basic>
            <Icon name='eye' /> { views }
        </Label>
        <Label basic>
            <Icon name='bookmark' /> { bookmarks }
        </Label>
        <Label basic as="a">
            <Icon name='comment' /> { comments }
        </Label>
    </>
);

const MostReadingItem = ({ labels, title, href }) => {
    return (
        <>
            <Header as="h4">
                <a href={href} style={{
                    textDecoration: 'none',
                    color: 'rgba(0,0,0,.87)'
                }}>
                    { title }
                </a>
            </Header>
            <MostReadingLabels
                ups={labels.ups}
                views={labels.views}
                bookmarks={labels.bookmarks}
                comments={labels.comments}
            />
            <Divider />
        </>
    )
};

const MostReading = () => {
    return (
        <>
            <Divider />

            <div style={{
                backgroundColor: '#f7f7f7',
                padding: '15px',
                borderRadius: '5px'
            }}>
                <Header as="h3" color='grey'>
                    Самое читаемое
                </Header>

                <Divider />

                <div>
                    <Button.Group>
                        <Button basic color='blue'>Сутки</Button>
                        <Button basic color='blue'>Неделя</Button>
                        <Button basic color='blue'>Месяц</Button>
                    </Button.Group>
                </div>

                <MostReadingItem
                    title="Apple выпустила новый iPhone SE по цене от 40 000 ₽"
                    href="/post/13"
                    labels={{
                        ups: 10,
                        views: 25,
                        bookmarks: 6,
                        comments: 23
                    }}
                />
                <MostReadingItem
                    title="Девочки сидят дома: регистрация новых вебкам-моделей выросла на 37—69%"
                    href="/post/13"
                    labels={{
                        ups: 2,
                        views: 14,
                        bookmarks: 2,
                        comments: 6
                    }}
                />
                <MostReadingItem
                    title="Коллеги: и не друг, и не враг, а как?"
                    href="/post/13"
                    labels={{
                        ups: 23,
                        views: 45,
                        bookmarks: 13,
                        comments: 55
                    }}
                />
                <MostReadingItem
                    title="Ликбез по респираторам. Помогает ли респиратор от заражения вирусом. Обзор 11 респираторов"
                    href="/post/13"
                    labels={{
                        ups: 7,
                        views: 30,
                        bookmarks: 6,
                        comments: 16
                    }}
                />
                <MostReadingItem
                    title="Велотренажер #Самоизоляция или как угомонить ребенка на карантине"
                    href="/post/13"
                    labels={{
                        ups: 35,
                        views: 342,
                        bookmarks: 25,
                        comments: 234
                    }}
                />
            </div>
        </>
    )
};

Index.getInitialProps = async ({ res }) => {
    const { status, contents } = await Content.GetContents();

    return { contents: contents }
};