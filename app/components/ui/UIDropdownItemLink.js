import { withRouter } from "next/router";
import { Dropdown } from "semantic-ui-react";
import Link from "next/link";

const UIDropdownItemLink = withRouter(({ name, href, as, router }) => {
    if (!as) {
        as = href
    }

    return <Dropdown.Item
        text={name}
        selected={(router.asPath === href || router.asPath === as)}
        onClick={() => {
            router.push(as)
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