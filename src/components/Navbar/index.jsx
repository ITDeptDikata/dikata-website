import { memo, useCallback, useRef, useState } from "react";
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

    // REFAC this isn't the nicest way to set the starting height since we need
    // to change this + the height in NavbarMenu everytime we want to
    // change the initial height
    let height = "3.625rem";
    if (menu && dropdown) {
        const menuH = parseInt(getComputedStyle(menu).height);
        const dropdownH = parseInt(getComputedStyle(dropdown).height);

        height = isOpen ? `${menuH + dropdownH}px` : `${menuH}px`;
    }

    // Event listeners
    const onBurgerClick = useCallback(() => {
        setIsOpen(p => !p);
    }, []);

    return (
        <nav
            className={
                "sticky top-0 z-50 overflow-hidden bg-white transition-all [transition-duration:500ms]"
            }
            style={{ height }}
        >
            <NavbarMenu
                ref={menuRef}
                onBurgerClick={onBurgerClick}
            />

            <NavbarDropdown
                ref={dropdownRef}
                links={links}
            />
        </nav>
    );
};

export default memo(Navbar);
