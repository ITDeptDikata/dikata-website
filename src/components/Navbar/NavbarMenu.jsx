import { forwardRef, memo } from "react";
import { Link } from "react-router-dom";
import DikataIconCircle from "../Icons/DikataIconCircle";
import MenuIcon from "../Icons/MenuIcon";

const NavbarMenu = forwardRef(({ onBurgerClick }, ref) => (
    <ul
        ref={ref}
        className="flex h-[3.625rem] select-none list-none items-center justify-between px-7"
    >
        <li className="cursor-pointer">
            <Link to="/">
                <DikataIconCircle />
            </Link>
        </li>

        <li
            className="cursor-pointer"
            onClick={onBurgerClick}
        >
            <MenuIcon className="w-full fill-brand" />
        </li>
    </ul>
));

export default memo(NavbarMenu);
