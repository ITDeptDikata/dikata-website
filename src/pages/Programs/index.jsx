import ProgramsHeader from "./ProgramsHeader";
import { programsData } from "../../test/programsData";
import ProgramsSlider from "./ProgramsSlider";
import { useState } from "react";

const Programs = () => {
    const [slideIndex, setSlideIndex] = useState(1);

    const handleNextSlide = () => {
        if (slideIndex !== programsData.length) {
            setSlideIndex(slideIndex + 1);
        } else {
            setSlideIndex(1);
        }
    };

    const handlePrevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else {
            setSlideIndex(programsData.length);
        }
    };

    return (
        <section className="from-yellow-to-white  h-[600px] bg-gradient-to-t pt-[0.4375em]">
            <ProgramsHeader />
            <ProgramsSlider
                datas={programsData}
                slideIndex={slideIndex}
                nextSlide={handleNextSlide}
                prevSlide={handlePrevSlide}
            />
        </section>
    );
};

export default Programs;
