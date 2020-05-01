import { useState } from 'react';
import PropTypes from 'prop-types';
import { TextArea } from "semantic-ui-react";

const UITexArea = ({ value, onChange, label, placeholder, limit }) => {
    const [ len, setLen ] = useState(!!value ? value.length : 0);
    const [ limitation, setLimitation ] = useState(false);

    const onOverrideChange = (e, { name, value }) => {
        if (limit && len === limit) {
            setLimitation(true);
            return;
        } else {
            setLimitation(false)
        }

        if (limit) {
            setLen(value.length);
        }

        onChange(e, { name, value });
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            paddingBottom: '15px'
        }}>
            <TextArea
                value={value}
                onChange={onOverrideChange}
                label={label}
                placeholder={placeholder}
                error={!limitation ? "true" : "false"} // what?
            />
            {
                limit &&
                <div style={{
                    paddingTop: '5px',
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>
                    <p style={{
                        color: limitation ? 'red' : '#000'
                    }}>{len}/{limit}</p>
                </div>
            }
        </div>
    )
};

UITexArea.propTypes = {
    limit: PropTypes.number
};

export default UITexArea;