/**
 * Use this for a section with heading and text (e.g. Tentang Kami, Visi Kami, dst.)
 */
const TextSection = ({ children, title }) => (
    <section className="h-max w-max">
        <h2 className="text-shadow-sm font-heading text-2xl font-bold">{title}</h2>
        <p className="font-heading text-[0.9375rem] font-normal leading-5">
            {children}
        </p>
    </section>
);

export default TextSection;
