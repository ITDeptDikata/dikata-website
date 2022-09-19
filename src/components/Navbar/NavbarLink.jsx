import { memo } from "react";
import { HashLink } from "react-router-hash-link";
/**
 * @typedef NavbarLinkProps
 *
 * @property {string} children
 *
 * @property {string} href
 */

/**
 *
 * @param {NavbarLinkProps} props
 */
const NavbarLink = ({ children, href }) => (
    <li className="flex list-none items-center justify-center py-4 font-sans text-4xl font-extrabold">
        <HashLink
            smooth
            className={({ isActive }) => (isActive ? "text-brand" : "")}
            to={href}
        >
            {children}
        </HashLink>
    </li>
);

export default memo(NavbarLink);
