import { Container, Grid, Ref, Sticky } from "semantic-ui-react";
import CommonLayout from "./CommonLayout";
import { UIMenuItemLink, UITagsAsside, UITabMenu } from "../components";
import { createRef, useEffect, useState } from "react";
import { Tag } from '../services';

const Flows = [
    {title: 'Разработка', count: '+55', href: '/flows/develop'},
    {title: 'Научоп', count: '+6', href: '/'},
    {title: 'Разработка', count: '+7', href: '/flows/develop'},
    {title: 'Администрирвоание', count: '+22', href: '/flows/develop'},
    {title: 'Дизайн', count: '+4', href: '/flows/develop'},
    {title: 'Разработка', count: '+16', href: '/flows/develop'},
    {title: 'Менеджмент', count: '+13', href: '/flows/develop'},
    {title: 'Маркетинг', count: '+1', href: '/flows/develop'},
];

const IndexLayout = ({ children }) => {
    const contextRef = createRef();
    const [ tags, setTags ] = useState(null);

    useEffect(() => {
        Tag.getTags().then(({ status, tags }) => {
            // tmp
            if (!!tags) {
                setTags(tags.map((v) => (
                    {
                        href: `/tag/${v.label}`,
                        title: v.name,
                        count: '+5'
                    }
                )))
            }
        });
    }, []);

    return (
        <CommonLayout>
            <Container>
                <Grid>
                    <Ref innerRef={contextRef}>
                        <Grid.Row columns={2}>
                            <Grid.Column width={12}>
                                <UITabMenu>
                                    <UIMenuItemLink href="/" name="Статьи" as="/" />
                                    <UIMenuItemLink href="/news" name="Новости" as="/news" />
                                    <UIMenuItemLink href="/authors" name="Авторы" as="/authors" />
                                    <UIMenuItemLink href="/companies" name="Компании" as="companies" />
                                </UITabMenu>
                                { children }
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Sticky context={contextRef} offset={30}>
                                    {
                                        !!tags &&
                                        <UITagsAsside tags={tags} />
                                    }
                                </Sticky>
                            </Grid.Column>
                        </Grid.Row>
                    </Ref>
                </Grid>
            </Container>
        </CommonLayout>
    )
};

export default IndexLayout;