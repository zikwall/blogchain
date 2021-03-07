import { Button, Comment, Form, Header } from 'semantic-ui-react'
import { useThemeContext } from "@blogchain/components";

const UserComment = ({ isDark, author, avatar, time, content, comments }) => {
    const classnames = ['themedlink', isDark ? 'dark' : 'white'].join(' ');

    return (
        <Comment>
            <Comment.Avatar as='a' src={ avatar } />
            <Comment.Content>
                <Comment.Author as='a' className={classnames}>{ author }</Comment.Author>
                <Comment.Metadata className={classnames}>
                    <span>{ time }</span>
                </Comment.Metadata>
                <Comment.Text className={classnames}>{ content }</Comment.Text>
                <Comment.Actions className={classnames}>
                    <a>Ответить</a>
                </Comment.Actions>
            </Comment.Content>

            {
                !!comments && Array.isArray(comments) && comments.length > 0 &&
                <Comment.Group threaded className={ isDark ? 'dark' : 'white' }>
                    { (Array.from(comments) || []).map((comment, i) => {
                        return (
                            <UserComment key={i}
                                isDark={isDark}
                                avatar={comment.avatar}
                                author={comment.author}
                                time={comment.time}
                                content={comment.content}
                                comments={comment.comments || []}
                            />
                        )
                    }) }
                </Comment.Group>
            }
        </Comment>
    )
}

const CommentExampleThreaded = () => {
    const [ theme ] = useThemeContext();

    return (
        <Comment.Group threaded className={'root-comments'}>
            <Header as='h3' dividing inverted={theme.isDark}>
                <div id="comments">Комментарии </div>
            </Header>

            <UserComment
                isDark={theme.isDark}
                avatar={'https://habrastorage.org/getpro/habr/avatars/791/217/d31/791217d314e7458aef0f63497e212538.png'}
                author={'SashulyaK'}
                time={'вчера в 13:59'}
                content={'Вы правы, мы изначально этим пользовались. Но разница между соседними фреймами даёт ложные срабатывания в динамичных сценах. А ещё она не детектит переходы, когда шоты плавно перетекают друг в друга фейдами. В итоге пришлось перейти на нейронки.'}
            />

            <UserComment
                isDark={theme.isDark}
                avatar={'https://habrastorage.org/getpro/habr/avatars/93f/965/c06/93f965c063c9c1910aac6271e3686cc9.jpg'}
                author={'GeneD88'}
                time={'вчера в 23:56'}
                content={'А как подобный алгоритм справляется с такими фильмами, где присутствует сплит-экран, например как The Sisters Де Пальмы (2 экрана), Timecode Фиггиса (4 экрана), Charly Нельсона и тп?'}
                comments={[
                    {
                        avatar:'https://habrastorage.org/getpro/habr/avatars/791/217/d31/791217d314e7458aef0f63497e212538.png',
                        author: 'SashulyaK',
                        time: 'Только что',
                        content: 'Хороший воспрос) Если использовать только фичи видеоряда, то, скорее всего, не сработает. Но если добавить звук (или использовать только звук), это может решить проблему.'
                    },
                    {
                        avatar: 'https://habrastorage.org/getpro/habr/avatars/279/fd4/4f1/279fd44f1aab1c22791c701977182439.png',
                        author: 'marsermd',
                        time: 'вчера в 23:39',
                        content: 'Хабр здорового человека, где снова пишут про разработку',
                        comments: [
                            {
                                avatar: 'https://habrastorage.org/getpro/habr/avatars/279/fd4/4f1/279fd44f1aab1c22791c701977182439.png',
                                author: 'marsermd',
                                time: 'вчера в 23:49',
                                content: 'Какая приятная статья! Давненько такого на хабре не читал. Спасибо большое!',
                            }
                        ]
                    },
                ]}
            />

            <UserComment
                isDark={theme.isDark}
                avatar={'https://habrastorage.org/getpro/habr/avatars/279/fd4/4f1/279fd44f1aab1c22791c701977182439.png'}
                author={'marsermd'}
                time={'вчера в 23:39'}
                content={'Какая приятная статья! Давненько такого на хабре не читал. Спасибо большое!'}
            />

            <Form reply inverted={theme.isDark}>
                <Form.TextArea inverted={theme.isDark} />
                <Button content='Отправить' labelPosition='left' icon='edit' primary inverted={theme.isDark} />
            </Form>
        </Comment.Group>
    )
}

export default CommentExampleThreaded
