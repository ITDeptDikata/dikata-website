import { memo } from "react";
import { NavLink } from "react-router-dom";

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
        <NavLink
            className={({ isActive }) => (isActive ? "text-brand" : "")}
            to={href}
        >
            {children}
        </NavLink>
    </li>
);

export default memo(NavbarLink);
