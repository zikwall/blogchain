/* if user is not authorized see bottom sheet */
export default function UnauthDummy({ visible }) {
    return (
        <div className='unauth-dummy' style={{
            paddingBottom: visible ? '80px' : '0px'
        }} />
    )
}