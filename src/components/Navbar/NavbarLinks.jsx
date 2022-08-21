/**
 * @typedef NavbarLinksProps
 *
 * @property {{title: string, href: string}[]} links
 */

import NavbarLink from "./NavbarLink";

/**
 *
 * @param {NavbarLinksProps} props
 */
const NavbarLinks = ({ links }) => {
    const navbarLinks = links.map(({ href, title }, i) => (
        <NavbarLink
            href={href}
            key={i}
        >
            {title}
        </NavbarLink>
    ));

    return <ul>{navbarLinks}</ul>;
};

export default NavbarLinks;
