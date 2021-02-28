import { Header, Divider } from "semantic-ui-react";
import { useThemeContext } from "@blogchain/components";

const InfoRow = ({ label, value }) => {
    const [ theme ] = useThemeContext();

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '5px',
            paddingBottom: '5px'
        }}>
            <div style={{
                textAlign: 'left',
                width: '49%',
                color: theme.isDark ? '#ffffff' : 'rgba(0,0,0,.87)'
            }}>
                <b>{ label }</b>
            </div>
            <div style={{
                textAlign: 'left',
                width: '49%',
                color: theme.isDark ? '#ffffff' : 'rgba(0,0,0,.87)'
            }}>
                <span>{ value }</span>
            </div>
        </div>
    )
};

const UICompanyInfo = () => {
    const [ theme ] = useThemeContext();

    return (
        <div style={{
            backgroundColor: theme.isDark ? 'rgb(13, 17, 23)' : '#f7f7f7',
            padding: '10px',
            borderRadius: '5px',
            marginBottom: '15px',
        }}>
            <Header as="h4" inverted={theme.isDark}>
                Информация
            </Header>
            <Divider inverted={theme.isDark}/>
            <div>
                <InfoRow
                    label="Дата основания"
                    value="26.03.2010 г."
                />
                <InfoRow
                    label="Сайт"
                    value="ivi.ru"
                />
            </div>
        </div>
    )
};

export default UICompanyInfo;