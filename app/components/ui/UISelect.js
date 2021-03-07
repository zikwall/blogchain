import { useEffect, useState } from 'react';
import { Dropdown } from "semantic-ui-react";

const UISelect = ({ fetcher, placeholder, multiple, value, search, onChange, onSearch }) => {
    const [ selectOptions, setSelectOptions ] = useState([]);
    const [ isFetching, setIsFetching ] = useState(true);

    useEffect(() => {
        (async () => {
            const { response, status } = await fetcher();

            if (status) {
                const { tags } = response;

                setSelectOptions((Array.from(tags) || []).map((tag) => (
                    { value: tag.id, text: tag.name }
                )));
                setIsFetching(false);
            }
        })()
    }, []);

    return (
        <div style={{
            paddingTop: '15px',
            paddingBottom: '15px'
        }}>
            <Dropdown
                fluid
                selection
                multiple={multiple}
                search={search}
                options={selectOptions}
                value={value}
                placeholder={placeholder}
                onChange={(e, { value }) => onChange(value)}
                onSearchChange={(e, { searchQuery }) => onSearch(searchQuery)}
                disabled={isFetching}
                loading={isFetching}
            />
        </div>
    )
};

export default UISelect;