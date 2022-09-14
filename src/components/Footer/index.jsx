import React from "react";
import FooterAddress from "./FooterAddress";
import FooterIcon from "./FooterIcon";
import FooterImage from "./FooterImage";
import FooterLink from "./FooterLink";

const Footer = () => {
    return (
        <footer className="bg-[#383839]">
            <FooterImage />
            <FooterIcon />
            <FooterLink />
            <FooterAddress />
        </footer>
    );
};

export default Footer;
