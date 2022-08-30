import React from "react";
import AchievementsList from "./AchievementsList";

const Achievements = () => {
    return (
        <section className=" from-yellow-to-white bg-gradient-to-b">
            <h2 className="text-h2 mb-[0.4375rem] text-center">
                Dikata Achievements
            </h2>
            <AchievementsList />
        </section>
    );
};

export default Achievements;
