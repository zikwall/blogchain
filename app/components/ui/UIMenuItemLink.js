import { withRouter } from "next/router";
import { Menu } from "semantic-ui-react";
import Link from "next/link";
import { String } from '../../utils';

const UIMenuItemLink = withRouter(({ href, name, as, router }) => {
    let current = router.asPath;

    if (!!current) {
        // delete query string, e.g: /tag/lol/?page=2 => /tag/lol
        current = String.cutAfter('?', current);
    }

    return <Menu.Item
        active={(current === href || current === as)}
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