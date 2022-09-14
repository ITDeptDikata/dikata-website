const TeamsItem = ({ member }) => {
    const { id, position, name, layout } = member;

    return (
        <li
            key={id}
            className={
                layout === "reversed"
                    ? "bg-[#D9D9D9] text-xl"
                    : "bg-[#F5A900] text-xl"
            }
        >
            <figure
                className={
                    layout === "reversed"
                        ? "flex flex-row-reverse items-center justify-center gap-8 py-4"
                        : "flex-row- flex items-center justify-center gap-8 py-4"
                }
            >
                <img
                    src={`images/teams/team-${id}.png`}
                    alt="dikata-member"
                    className={
                        layout === "reversed"
                            ? "mr-[5%] w-[110px]"
                            : "ml-[5%] w-[110px]"
                    }
                />
                <figcaption
                    className={
                        layout === "reversed"
                            ? "ml-[5%] w-full text-right"
                            : "mr-[5%] w-full text-left"
                    }
                >
                    <h3 className="text-heading font-bold">{position}</h3>
                    <p>{name}</p>
                </figcaption>
            </figure>
        </li>
    );
};

export default TeamsItem;
