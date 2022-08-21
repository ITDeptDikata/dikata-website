/**
 * @typedef NavbarLinkProps
 *
 * @property {string} children
 *
 * @property {string} href
 */

import { NavLink } from "react-router-dom";

/**
 *
 * @param {NavbarLinkProps} props
 */
const NavbarLink = ({ children, href }) => {
    return (
        <li className="flex list-none items-center justify-center bg-brand py-4 font-sans text-4xl font-extrabold">
            <NavLink
                className={({ isActive }) => isActive && "text-blue-500"}
                to={href}
            >
                {children}
            </NavLink>
        </li>
    );
};

export default NavbarLink;
