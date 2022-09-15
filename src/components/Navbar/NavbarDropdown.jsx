import { forwardRef, useMemo } from "react";
import NavbarLink from "./NavbarLink";

/**
 * @typedef NavbarDropdownProps
 *
 * @property {{title: string, href: string}[]} links
 */

/**
 *
 * @param {NavbarDropdownProps} props
 */
const NavbarDropdown = forwardRef(({ links }, ref) => {
    const navbarLinks = useMemo(
        () =>
            links.map(({ href, title }, i) => (
                <NavbarLink
                    href={href}
                    key={i}
                >
                    {title}
                </NavbarLink>
            )),
        [links]
    );

    return <ul ref={ref}>{navbarLinks}</ul>;
});

export default NavbarDropdown;
