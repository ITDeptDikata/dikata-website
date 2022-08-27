import TextSection from "../../components/Layouts/TextSection";
import DikataMissions from "./DikataMissions";
import HomeHero from "./HomeHero";

const Home = () => {
    return (
        <main>
            <section className="bg-brand">
                <div className="container mx-auto flex flex-col gap-5 px-5 pt-9 pb-3">
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
            </section>

            <section className="bg-brand">
                <div className="container mx-auto flex flex-col gap-5 px-5 pt-3 pb-9">
                    <DikataMissions />

                    {/* TODO add dikata value's */}
                </div>
            </section>
        </main>
    );
};

export default Home;
