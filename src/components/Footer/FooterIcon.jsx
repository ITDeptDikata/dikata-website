import React from "react";

const IconList = ({ img }) => (
    <img
        src={`images/${img}.svg`}
        className="h-[50px] w-[50px]"
    />
);

const FooterIcon = () => {
    return (
        <ul className="mx-[4.375rem] flex justify-around pt-[3.75em] pb-[1.875em]">
            <IconList img="footer-instagram" />
            <IconList img="footer-mail" />
            <IconList img="footer-faq" />
            <IconList img="footer-location" />
        </ul>
    );
};

export default FooterIcon;
