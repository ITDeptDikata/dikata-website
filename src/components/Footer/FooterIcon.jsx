import React from "react";

const IconList = ({ img, href }) => (
    <a
        target={0}
        href={href}
    >
        <img
            src={`images/footer/${img}.svg`}
            className="h-[50px] w-[50px]"
        />
    </a>
);

const FooterIcon = () => {
    return (
        <ul className="mx-[4.375rem] flex justify-around pt-[3.75em] pb-[1.875em]">
            <IconList
                img="footer-instagram"
                href="https://www.instagram.com/dikataorg/"
            />
            <IconList
                img="footer-mail"
                href={"mailto:dikata.org@gmail.com"}
            />
            <IconList
                img="footer-faq"
                href="https://campsite.bio/dikataorg"
            />
            <IconList
                img="footer-location"
                href="https://goo.gl/maps/2Qt9cZtPLejYY4CY6"
            />
        </ul>
    );
};

export default FooterIcon;
