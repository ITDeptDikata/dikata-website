import SliderButton from "./SliderButton";

const ProgramsItem = ({ data, index, slideIndex, nextSlide, prevSlide }) => {
    const { id, image, date, title, description } = data;

    return (
        <>
            <article
                className={
                    slideIndex === index + 1
                        ? "absolute h-full w-full opacity-100"
                        : "absolute h-full w-full opacity-0"
                }
            >
                <div className="relative">
                    <img
                        src={image}
                        alt={`program-${id}`}
                        className="mx-auto mb-4 mt-8 w-64 object-cover"
                    />
                    <SliderButton
                        handleSlide={nextSlide}
                        direction={"next"}
                    />
                    <SliderButton
                        handleSlide={prevSlide}
                        direction={"prev"}
                    />
                </div>
                <div className="mx-[1.3125em]">
                    <h3 className="text-heading text-shadow-sm mb-4 text-xl font-bold">
                        {title}
                    </h3>
                    <p className="text-body whitespace-pre-line">{description}</p>
                </div>
            </article>
        </>
    );
};

export default ProgramsItem;
