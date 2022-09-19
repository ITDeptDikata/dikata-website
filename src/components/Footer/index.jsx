import React from "react";
import FooterAddress from "./FooterAddress";
import FooterIcons from "./FooterIcons";
import FooterImage from "./FooterImage";
import FooterLink from "./FooterLink";

const Footer = () => {
    return (
        <footer className="bg-[#383839]">
            <FooterImage />
            <FooterIcons />
            <FooterLink />
            <FooterAddress />
        </footer>
    );
};

export default Footer;
