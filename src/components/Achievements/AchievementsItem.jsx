import React from "react";

const AchievementsItem = () => {
    return (
        <ul>
            <li className="mb-1 flex flex-col gap-1">
                <div className="mx-auto flex h-[58px] w-[122px] items-center justify-center bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                    <p className="ml-1 text-4xl font-extrabold text-[#FFE600]">
                        100+
                    </p>
                </div>
                <p className="text-body mx-auto w-[75%] text-center">
                    anak muda di berbagai daerah telah berkolaborasi lewat Dikata
                </p>
            </li>
            <li className="mb-1 flex flex-col gap-1">
                <div className="mx-auto flex h-[58px] w-[122px] items-center justify-center bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                    <p className="ml-1 text-4xl font-extrabold text-[#838383]">
                        200+
                    </p>
                </div>
                <p className="text-body mx-auto w-[75%] text-center">
                    pegiat literasi nasional telah bergabung untuk berkarya bersama
                    dikata
                </p>
            </li>
            <li className="mb-1 flex flex-col gap-1">
                <div className="mx-auto flex h-[58px] w-[122px] items-center justify-center bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                    <p className="ml-1 text-4xl font-extrabold text-[#00800D]">
                        70+
                    </p>
                </div>
                <p className="text-body mx-auto w-[75%] text-center">
                    jalinan kerja sama dengan berbagai komunitas dan media
                </p>
            </li>
            <li className="mb-1 flex flex-col gap-1">
                <div className="mx-auto flex h-[58px] w-[122px] items-center justify-center bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                    <p className="ml-1 text-4xl font-extrabold text-[#CF25C8]">
                        50+
                    </p>
                </div>
                <p className="text-body mx-auto w-[75%] text-center">
                    kolaborasi bersama narasumber interaktif di berbagai event
                </p>
            </li>
            <li className="mb-1 flex flex-col gap-1">
                <div className="mx-auto flex h-[58px] w-[122px] items-center justify-center bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                    <p className="ml-1 text-4xl font-extrabold text-[#005AE0]">
                        25+
                    </p>
                </div>
                <p className="text-body mx-auto w-[75%] text-center">
                    program internal dan eksternal terlaksana
                </p>
            </li>
        </ul>
    );
};

export default AchievementsItem;
