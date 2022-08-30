import TextSection from "../../components/Layouts/TextSection";
import Wave from "../../components/Shapes/Wave";
import DikataMissions from "./DikataMissions";
import DikataValue from "./DikataValue";
import HomeHero from "./HomeHero";

const Home = () => {
    return (
        <main className="overflow-hidden">
            <section className="from-yellow-to-white relative bg-gradient-to-b">
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
            </section>

            <section className="from-yellow-to-white relative bg-gradient-to-t">
                <Wave className="absolute -top-1 right-0 max-h-64 w-full rotate-180" />

                <div className="container mx-auto flex flex-col gap-5 px-5 pt-3 pb-9">
                    <DikataMissions />

                    <DikataValue />
                </div>
            </section>
        </main>
    );
};

export default Home;
