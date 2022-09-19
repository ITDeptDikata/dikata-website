const DikatMagazine = () => {
    return (
        <section className="flex flex-col space-y-5 bg-brand-50 px-[1.3125em]">
            <h2 className="text-h2">Dikata Magazine</h2>
            <img
                src="/images/dikata-magazine-cover.png"
                alt="dikata magazine cover"
                className="mx-auto w-72 rounded-lg drop-shadow-xl"
            />
            <p className="text-body">
                Dikata menyapa anda dengan majalah perdana kami! Jika manta tertarik
                mengetahui serba serbi info dari dikata, yuk download saja majalah
                kami melalui tombol dibawah ini!
            </p>
            <a
                className="rounded-md bg-black p-3 text-center text-brand-50 shadow-md transition-colors hover:bg-white-50 active:bg-gray-200"
                download="Dikata Menyapa"
                href="dikata-magazine.pdf"
            >
                Download Dikata Menyapa
            </a>
        </section>
    );
};

export default DikatMagazine;
