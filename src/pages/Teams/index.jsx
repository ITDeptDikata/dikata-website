import TeamsHeader from "./TeamsHeader";
import TeamsList from "./TeamsList";
import { members } from "../../test/teamsData";

const Teams = () => {
    return (
        <section>
            <TeamsHeader />
            <TeamsList members={members} />
        </section>
    );
};

export default Teams;
