import ProgramsItem from "./ProgramsItem";

const ProgramsSlider = ({ datas, slideIndex, nextSlide, prevSlide }) => {
    return (
        <div className="relative max-w-2xl list-none">
            {datas.map((data, index) => (
                <ProgramsItem
                    index={index}
                    slideIndex={slideIndex}
                    data={data}
                    key={data.id}
                    nextSlide={nextSlide}
                    prevSlide={prevSlide}
                />
            ))}
        </div>
    );
};

export default ProgramsSlider;
