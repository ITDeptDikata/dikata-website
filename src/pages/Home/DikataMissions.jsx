const ListItem = ({ children }) => (
    <li className="list-yellow-checkbox flex gap-3">
        <img
            src="images/list-checkbox.png"
            className="h-[25px] w-[25px]"
        />
        {children}
    </li>
);

const DikataMissions = () => {
    return (
        <section className="z-10">
            <h2 className="text-h2 mb-[0.4375rem]">Misi Kami</h2>
            <ul className="text-body space-y-4">
                <ListItem>
                    Memperluas dan mempermudah akses sobat literasi dalam berkarya
                    dan berkontribusi.
                </ListItem>
                <ListItem>
                    Menjaga relasi yang harmonis antar pihak internal dan eksternal
                    Dikata.
                </ListItem>
                <ListItem>
                    Melaksanakan berbagai macam program secara konsisten, aktif, dan
                    sustainable.
                </ListItem>
            </ul>
        </section>
    );
};

export default DikataMissions;
