import { useSelector } from "react-redux";

// next
import { useRouter } from "next/router";

// redux
import { getToken } from "@blogchain/redux/reducers";

// components
import { Button, Container } from "semantic-ui-react";
import { LoginModal } from "@blogchain/components";
import styles from './PageBottomSheet.module.css';

const LoginPageBottomSheet = () => {
    const router = useRouter();
    const token = useSelector(state => getToken(state));

    if (!!token) {
        return <></>
    }

    return (
        <Container>
            <div
                className={[
                    styles.PageBottomBanner,
                    styles.PageBottomBanner_animated,
                    styles.PageBottomBanner_bg_green,
                    styles.PageBottomBanner__unauth,
                ].join(' ')}
            >
                <div className={ styles.PageBottomBanner__in }>
                    <div
                        className={[
                            styles.PageBottomBanner__icon,
                            styles.PageBottomBanner__icon__logo
                        ].join(' ')}
                    />
                    <div className={ styles.PageBottomBanner__content }>
                        <div className={ styles.PageBottomBanner__header }>
                            Читайте только самое интересное
                        </div>
                        <div className={ styles.PageBottomBanner__text }>
                            Мы найдём много записей по вашему вкусу и соберём из них целую ленту — просто войдите в свой аккаунт.
                        </div>
                    </div>
                    <div className={ styles.PageBottomBanner__actions }>
                        <Button animated='fade' fluid color={'orange'} onClick={() => {
                            router.push('/register')
                        }}>
                            <Button.Content visible>Зарегистрироваться</Button.Content>
                            <Button.Content hidden>Прямо сейчас!</Button.Content>
                        </Button>
                        <LoginModal
                            trigger={
                                <Button content='Войти' inverted />
                            }
                        />
                    </div>

                </div>
            </div>
        </Container>
    )
}

export default LoginPageBottomSheet;