import { withRouter } from "next/router";
import { Dropdown } from "semantic-ui-react";
import Link from "next/link";

const UIDropdownItemLink = withRouter(({ name, href, as, router }) => {
    return <Dropdown.Item
        text={name}
        selected={(router.asPath === href || router.asPath === as)}
        onClick={() => {
            router.push(href)
        }}
    >
        <Link href={href} as={as}>
            <>
                { name }
            </>
        </Link>
    </Dropdown.Item>
});

export default UIDropdownItemLink;