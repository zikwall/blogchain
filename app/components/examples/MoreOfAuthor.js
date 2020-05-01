import {Divider, Header} from "semantic-ui-react";
import {UIMoreItem} from "../index";

const MoreOfAuthor = () => (
    <div style={{
        backgroundColor: '#f7f7f7',
        padding: '10px',
        borderRadius: '5px'
    }}>
        <Header as="h4">
            Еще от автора
        </Header>
        <Divider />
        <div>
            <UIMoreItem
                title="Apple выпустила новый iPhone SE по цене от 40 000 ₽"
                href="/post/13"
                labels={{
                    views: 25,
                    comments: 23
                }}
            />
            <UIMoreItem
                title="Девочки сидят дома: регистрация новых вебкам-моделей выросла на 37—69%"
                href="/post/13"
                labels={{
                    views: 14,
                    comments: 6
                }}
            />
            <UIMoreItem
                title="Коллеги: и не друг, и не враг, а как?"
                href="/post/13"
                labels={{
                    views: 45,
                    comments: 55
                }}
            />
            <UIMoreItem
                title="Ликбез по респираторам. Помогает ли респиратор от заражения вирусом. Обзор 11 респираторов"
                href="/post/13"
                labels={{
                    views: 30,
                    comments: 16
                }}
            />
            <UIMoreItem
                title="Велотренажер #Самоизоляция или как угомонить ребенка на карантине"
                href="/post/13"
                labels={{
                    views: 342,
                    comments: 234
                }}
            />
            <UIMoreItem
                title="Велотренажер #Самоизоляция или как угомонить ребенка на карантине"
                href="/post/13"
                labels={{
                    views: 342,
                    comments: 234
                }}
            />
        </div>
    </div>
);

export default MoreOfAuthor;