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
        <section className="z-10 mt-4">
            <h2 className="text-h2 mb-[0.4375rem]">Dikata&#39;s Values</h2>
            <ul className="text-body space-y-4">
                <ListItem>
                    <ListImage img="l-letter" />
                    <div className="flex flex-col font-bonanova">
                        <ListHeader>Learning together & forever learning</ListHeader>
                        <ListDescription>
                            setiap tim mengutamakan nilai belajar setiap proses yang
                            dilalui bersama.
                        </ListDescription>
                    </div>
                </ListItem>
                <ListItem>
                    <ListImage img="e-letter" />
                    <div className="flex flex-col font-bonanova">
                        <ListHeader>Earnest but stay have fun</ListHeader>
                        <ListDescription>
                            menciptakan ekosistem tim yang menyenangkan diantara
                            kesungguhan yang ada.
                        </ListDescription>
                    </div>
                </ListItem>
                <ListItem>
                    <ListImage img="a-letter" />
                    <div className="flex flex-col font-bonanova">
                        <ListHeader>Adaptive to understanding</ListHeader>
                        <ListDescription>
                            adaptasi yang baik mampu menciptakan suasana tim yang
                            penuh dengan empati.
                        </ListDescription>
                    </div>
                </ListItem>
                <ListItem>
                    <ListImage img="d-letter" />
                    <div className="flex flex-col font-bonanova">
                        <ListHeader>Deliver trust and work be honestly</ListHeader>
                        <ListDescription>
                            kesuksesan dalam berkinerja akan tercapai dengan modal
                            saling percaya dan jujur.
                        </ListDescription>
                    </div>
                </ListItem>
            </ul>
        </section>
    );
};

export default DikataValue;
