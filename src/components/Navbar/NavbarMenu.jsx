import { forwardRef } from "react";
import DikataIconCircle from "../Icons/DikataIconCircle";
import MenuIcon from "../Icons/MenuIcon";

const NavbarMenu = forwardRef(({ onDikataIconClick, onBurgerClick }, ref) => {
    return (
        <ul
            ref={ref}
            className="flex h-[3.625rem] select-none list-none items-center justify-between bg-white px-7"
        >
            <li
                className="cursor-pointer"
                onClick={onDikataIconClick}
            >
                <DikataIconCircle />
            </li>

            <li
                className="cursor-pointer"
                onClick={onBurgerClick}
            >
                <MenuIcon className="w-full fill-brand" />
            </li>
        </ul>
    );
});

export default NavbarMenu;
