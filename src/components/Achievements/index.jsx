import React from "react";
import AchievementsHeader from "./AchievementsHeader";
import AchievementsList from "./AchievementsList";

const Achievements = () => {
    return (
        <section className=" from-yellow-to-white bg-gradient-to-b">
            <AchievementsHeader />
            <AchievementsList />
        </section>
    );
};

export default Achievements;
