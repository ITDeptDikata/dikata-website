import ProgramsItem from "./ProgramsItem";

const ProgramsList = ({ datas }) => {
    return (
        <ul>
            {datas.map(data => (
                <ProgramsItem
                    key={data.id}
                    id={data.id}
                    image={data.image}
                    date={data.date}
                    title={data.title}
                    description={data.description}
                />
            ))}
        </ul>
    );
};

export default ProgramsList;
