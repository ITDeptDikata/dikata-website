import { memo } from "react";

const WelcomeCard = () => (
    <h3 className="w-max  bg-white px-2 py-1 font-heading text-sm font-medium shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
        welcome to our official website!
    </h3>
);

const HomeHero = () => (
    <header className="z-10 flex flex-col gap-[0.4375rem]">
        <WelcomeCard />

        <div>
            <h1 className="text-shadow-sm font-heading text-[2.5rem] font-bold uppercase leading-none text-white">
                dikata
            </h1>

            <p className="text-shadow-sm whitespace-nowrap font-heading text-sm font-bold uppercase text-white">
                Salam literasi, semangat kolaborasi
            </p>
        </div>

        <img
            src="/images/dikata-hero.png"
            alt="dikata poster"
            className="h-[152px] w-[291px]"
        />
    </header>
);

export default memo(HomeHero);
