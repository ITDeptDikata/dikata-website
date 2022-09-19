/**
 *
 * @param {{children: import("react").ReactNode, dir: "top" | "bottom"}} param0
 * @returns
 */
const SectionYellowGradient = ({ children, id, dir = "top" }) => {
    const className = `${
        dir === "top" ? "bg-gradient-to-t" : "bg-gradient-to-b"
    } from-yellow-to-white relative`;

    return (
        <section
            className={className}
            id={id}
        >
            {children}
        </section>
    );
};

export default SectionYellowGradient;
