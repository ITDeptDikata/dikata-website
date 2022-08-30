import { memo } from "react";

const ListImage = ({ img }) => (
    <img
        src={`images/${img}.png`}
        className="h-[50px] w-[50px]"
    />
);

const ListHeader = ({ children }) => (
    <h3 className="font-bonanova font-bold">{children}</h3>
);

const ListDescription = ({ children }) => (
    <p className="font-bonanova">{children}</p>
);

const ListItem = ({ children }) => (
    <li className="list-yellow-checkbox flex items-center gap-3">{children}</li>
);

const DikataValue = () => {
    return (
        <section className="z-10">
            <h2 className="text-h2 mb-[0.4375rem]">Dikata's Values</h2>
            <ul className="text-body space-y-4">
                <ListItem>
                    <ListImage img="L_word" />
                    <article className="flex flex-col font-bonanova">
                        <ListHeader>Learning together & forever learning</ListHeader>
                        <ListDescription>
                            setiap tim mengutamakan nilai belajar setiap proses yang
                            dilalui bersama.
                        </ListDescription>
                    </article>
                </ListItem>
                <ListItem>
                    <ListImage img="E_word" />
                    <article className="flex flex-col font-bonanova">
                        <ListHeader>Earnest but stay have fun</ListHeader>
                        <ListDescription>
                            menciptakan ekosistem tim yang menyenangkan diantara
                            kesungguhan yang ada.
                        </ListDescription>
                    </article>
                </ListItem>
                <ListItem>
                    <ListImage img="A_word" />
                    <article className="flex flex-col font-bonanova">
                        <ListHeader>Adaptive to understanding</ListHeader>
                        <ListDescription>
                            adaptasi yang baik mampu menciptakan suasana tim yang
                            penuh dengan empati.
                        </ListDescription>
                    </article>
                </ListItem>
                <ListItem>
                    <ListImage img="D_word" />
                    <article className="flex flex-col font-bonanova">
                        <ListHeader>Deliver trust and work be honestly</ListHeader>
                        <ListDescription>
                            kesuksesan dalam berkinerja akan tercapai dengan modal
                            saling percaya dan jujur.
                        </ListDescription>
                    </article>
                </ListItem>
            </ul>
        </section>
    );
};

export default DikataValue;
