import { useMemo, useRef, useState } from "react";
import NavbarDropdown from "./NavbarDropdown";
import NavbarMenu from "./NavbarMenu";

/**
 *
 * @param {import("./NavbarDropdown").NavbarDropdownProps} props
 * @returns
 */
const Navbar = ({ links }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Calculate height for dropdown animation
    const menuRef = useRef();
    const dropdownRef = useRef();

    const { current: menu } = menuRef;
    const { current: dropdown } = dropdownRef;

    const height = useMemo(() => {
        if (menu && dropdown) {
            const menuH = parseInt(getComputedStyle(menu).height);
            const dropdownH = parseInt(getComputedStyle(dropdown).height);

            return isOpen ? `${menuH + dropdownH}px` : `${menuH}px`;
        }

        // REFAC this isn't the nicest way to set the starting height since we need
        // to change this + the height in NavbarMenu everytime we want to
        // change the initial height
        return "3.625rem";
    }, [dropdown, isOpen, menu]);

    // Event listeners
    const onDikataIconClick = () => {};

    const onBurgerClick = () => {
        setIsOpen(p => !p);
    };

    return (
        <nav
            className={
                "sticky top-0 overflow-hidden transition-all [transition-duration:500ms]"
            }
            style={{ height }}
        >
            <NavbarMenu
                ref={menuRef}
                onBurgerClick={onBurgerClick}
                onDikataIconClick={onDikataIconClick}
            />

            <NavbarDropdown
                ref={dropdownRef}
                links={links}
            />
        </nav>
    );
};

export default Navbar;
