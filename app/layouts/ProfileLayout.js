import { Container, Grid, Ref, Sticky} from "semantic-ui-react";
import { createRef } from 'react';
import { UIMenuItemLink, UITabMenu, UIProfileSidebar } from "@blogchain/components";
import CommonLayout from "@blogchain/layouts/CommonLayout";

const ProfileLayout = ({ user, children }) => {
    const contextRef = createRef();

    return (
        <CommonLayout
            title={`${user.profile.name} | Blogchain`}
        >
            <Container>
                <Grid>
                    <Ref innerRef={contextRef}>
                        <Grid.Row columns={2}>
                            <Grid.Column width={5}>
                                <Sticky context={contextRef} offset={30}>
                                    <UIProfileSidebar user={user}/>
                                </Sticky>
                            </Grid.Column>
                            <Grid.Column width={11}>
                                <UITabMenu>
                                    <UIMenuItemLink href="/u/[username]" as={`/u/${user.username}`} name="Обзор" />
                                    <UIMenuItemLink href="/u/[username]/all" as={`/u/${user.username}/all`} name="Все статьи" />
                                    <UIMenuItemLink href="/u/[username]/stars" as={`/u/${user.username}/stars`} name="Звезды" />
                                    <UIMenuItemLink href="/u/[username]/followers" as={`/u/${user.username}/followers`} name="Подписчики" />
                                    <UIMenuItemLink href="/u/[username]/followings" as={`/u/${user.username}/followings`} name="Подписки" />
                                </UITabMenu>
                                { children }
                            </Grid.Column>
                        </Grid.Row>
                    </Ref>
                </Grid>
            </Container>
        </CommonLayout>
    )
};

export default ProfileLayout;