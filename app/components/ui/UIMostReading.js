import { Button, Divider, Header } from "semantic-ui-react";
import UIMostReadingItem from "./UIMostReadingItem";
import { useThemeContext } from "@blogchain/components";

const UIMostReading = () => {
    const [ theme ] = useThemeContext();

    return (
        <>
            <Divider />

            <div style={{
                backgroundColor: theme.isDark ? 'rgb(13, 17, 23)' : '#f7f7f7',
                padding: '15px',
                borderRadius: '5px'
            }}>
                <Header as="h3" color='grey' inverted={theme.isDark}>
                    Самое читаемое
                </Header>

                <Divider inverted={theme.isDark}/>

                <div>
                    <Button.Group inverted={theme.isDark}>
                        <Button basic color='blue' inverted={theme.isDark}>Сутки</Button>
                        <Button basic color='blue' inverted={theme.isDark}>Неделя</Button>
                        <Button basic color='blue' inverted={theme.isDark}>Месяц</Button>
                    </Button.Group>
                </div>

                <UIMostReadingItem
                    title="Apple выпустила новый iPhone SE по цене от 40 000 ₽"
                    href="/post/13"
                    labels={{
                        ups: 10,
                        views: 25,
                        bookmarks: 6,
                        comments: 23
                    }}
                />
                <UIMostReadingItem
                    title="Девочки сидят дома: регистрация новых вебкам-моделей выросла на 37—69%"
                    href="/post/13"
                    labels={{
                        ups: 2,
                        views: 14,
                        bookmarks: 2,
                        comments: 6
                    }}
                />
                <UIMostReadingItem
                    title="Коллеги: и не друг, и не враг, а как?"
                    href="/post/13"
                    labels={{
                        ups: 23,
                        views: 45,
                        bookmarks: 13,
                        comments: 55
                    }}
                />
                <UIMostReadingItem
                    title="Ликбез по респираторам. Помогает ли респиратор от заражения вирусом. Обзор 11 респираторов"
                    href="/post/13"
                    labels={{
                        ups: 7,
                        views: 30,
                        bookmarks: 6,
                        comments: 16
                    }}
                />
                <UIMostReadingItem
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

export default UIMostReading;