import TeamsItem from "./TeamsItem";

const TeamsList = ({ members }) => {
    return (
        <ul className="flex flex-col">
            {members.map(member => (
                <TeamsItem member={member} />
            ))}
        </ul>
    );
};

export default TeamsList;
