import CommonLayout from "./CommonLayout";
import { useSelector } from "react-redux";
import { getToken } from "@blogchain/redux/reducers";
import { useRouter } from "next/router";
import { useEffect } from "react";

const ProtectedLayout = ({ children, title }) => {
    const isAuth = useSelector(state => getToken(state));
    const router = useRouter();

    useEffect(() => {
        if (!isAuth) {
            router.push('/login');
        }
    }, [ isAuth ]);

    if (!isAuth) {
        return <div style={{
            paddingTop: '25%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <p>Please wait. Redirecting to Login...</p>
        </div>;
    }

    return <CommonLayout
        title={title}
    >
        { children }
    </CommonLayout>
};

export default ProtectedLayout;
