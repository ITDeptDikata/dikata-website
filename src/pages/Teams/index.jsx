import TeamsHeader from "./TeamsHeader";
import TeamsList from "./TeamsList";
import { members } from "../../test/teamsData";

const Teams = () => {
    return (
        <section id="team">
            <TeamsHeader />
            <TeamsList members={members} />
        </section>
    );
};

export default Teams;
