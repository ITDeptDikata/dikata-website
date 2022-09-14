import React from "react";

const FooterImage = () => {
    return (
        <div className="relative w-full bg-[url('/images/footer-overlay.png')] bg-cover bg-[position:100%] bg-no-repeat">
            <figure className="z-10 mx-4">
                <img
                    src="images/footer/footer-image.png"
                    alt="team"
                    className="mx-auto h-auto min-w-[200px] pt-4"
                />
                <figcaption className="pb-4 text-center font-sans text-xl font-bold uppercase">
                    Salam literasi, <br /> semangat kolaborasi
                </figcaption>
            </figure>
        </div>
    );
};

export default FooterImage;
