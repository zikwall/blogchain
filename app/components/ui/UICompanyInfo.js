import { Header, Divider } from "semantic-ui-react";

const InfoRow = ({ label, value }) => (
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
            width: '49%'
        }}>
            <b>{ label }</b>
        </div>
        <div style={{
            textAlign: 'left',
            width: '49%'
        }}>
            <span>{ value }</span>
        </div>
    </div>
);

const UICompanyInfo = () => (
    <div style={{
        backgroundColor: '#f7f7f7',
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '15px',
    }}>
        <Header as="h4">
            Информация
        </Header>
        <Divider />
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
);

export default UICompanyInfo;