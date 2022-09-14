import { memo } from "react";

/**
 * Use this for a section with heading and text (e.g. Tentang Kami, Visi Kami, dst.)
 */
const TextSection = ({ children, title }) => (
    <section className="z-10 h-max w-full">
        <h2 className="text-h2">{title}</h2>
        <p className="text-body">{children}</p>
    </section>
);

export default memo(TextSection);
