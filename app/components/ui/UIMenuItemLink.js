import { withRouter } from "next/router";
import { Menu } from "semantic-ui-react";
import Link from "next/link";

const UIMenuItemLink = withRouter(({ href, name, as, router }) => {
    return <Menu.Item
        active={(router.asPath === href || router.asPath === as)}
        onClick={() => {
            router.push(as)
        }}
    >
        <Link href={href} as={as}>
            <>
                { name }
            </>
        </Link>
    </Menu.Item>
});

export default UIMenuItemLink;