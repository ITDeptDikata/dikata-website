import React from "react";

const FooterAddress = () => {
    return (
        <div className="ml-[1.8375rem]">
            <p className="mt-[4.25rem]  mb-5 w-[45%] font-sans text-xs text-white-50">
                <span className="text-brand">Official Reading House of Dikata</span>{" "}
                - Jl. Teuku Cik Ditiro, No. 17, Rt. 07/01, Pesantunan, Wanasari,
                Brebes, Jawa Tengah, Indonesia 52221
            </p>
            <hr className="mr-[1.8375rem] mb-5 border-2 border-brand" />
            <figure className="flex items-center pb-[1.92rem]">
                <img
                    src="images/footer/dikata-logo-circle.png"
                    alt="dikata-logo"
                />
                <figcaption className="ml-[0.3175rem] font-inter font-bold text-white">
                    dikata
                </figcaption>
            </figure>
        </div>
    );
};

export default FooterAddress;
