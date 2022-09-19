import SectionYellowGradient from "../../components/Layouts/SectionYellowGradient";
import TextSection from "../../components/Layouts/TextSection";
import Wave from "../../components/Shapes/Wave";
import Achievements from "../../components/Achievements";
import DikataMissions from "./DikataMissions";
import DikataValue from "./DikataValue";
import HomeHero from "./HomeHero";
import Programs from "../Programs";
import Teams from "../Teams";
import Footer from "../../components/Footer";
import DikatMagazine from "./DikataMagazine";

const Home = () => {
    return (
        <main className="overflow-hidden">
            <SectionYellowGradient
                dir="bottom"
                id="about"
            >
                <Wave className="absolute -top-20 -right-20 max-h-44 w-full rotate-180" />

                <div className="container  mx-auto flex flex-col gap-5 px-5 pt-9 pb-3">
                    <HomeHero />

                    <TextSection title={"Tentang Kami"}>
                        Dikata merupakan wadah digital yang bergerak di bidang
                        pendidikan, dan berfokus dalam menyelesaikan permasalahan
                        terkhususnya mengenai isu-isu terhadap upaya pelestarian
                        budaya literasi dan kepenulisan yang ada di Indonesia.
                    </TextSection>

                    <TextSection title={"Visi Kami"}>
                        Menjadikan Dikata sebagai edutech startup berbasis literasi
                        yang bersifat edukatif, inovatif, dan kontributif.
                    </TextSection>
                </div>

                <Wave className="absolute -bottom-1 left-0 max-h-64 w-full" />
            </SectionYellowGradient>

            <SectionYellowGradient
                dir="top"
                id="missions"
            >
                <Wave className="absolute -top-1 right-0 max-h-64 w-full rotate-180" />

                <div className="container mx-auto flex flex-col gap-5 px-5 pt-3 pb-9">
                    <DikataMissions />

                    <DikataValue />
                </div>
            </SectionYellowGradient>

            <SectionYellowGradient
                dir="bottom"
                id="achievements"
            >
                <Achievements />
            </SectionYellowGradient>

            <SectionYellowGradient
                dir="top"
                id="programs"
            >
                <Programs />
            </SectionYellowGradient>

            <DikatMagazine />
            <Teams />
            <Footer />
        </main>
    );
};

export default Home;
