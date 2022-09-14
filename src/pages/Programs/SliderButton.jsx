import React from "react";

const SliderButton = ({ handleSlide, direction }) => {
    return (
        <button
            onClick={handleSlide}
            className={
                direction === "next"
                    ? "absolute top-[50%] right-5 flex h-8 w-8 translate-y-[-60%] cursor-pointer items-center justify-center rounded-[50%] bg-white-50 p-2"
                    : "absolute top-[50%] left-5 flex h-8 w-8 translate-y-[-60%] cursor-pointer items-center justify-center rounded-[50%] bg-white-50 p-2"
            }
        >
            <img
                src={
                    direction === "next"
                        ? "images/right-arrow.svg"
                        : "images/left-arrow.svg"
                }
                alt=""
            />
        </button>
    );
};

export default SliderButton;
