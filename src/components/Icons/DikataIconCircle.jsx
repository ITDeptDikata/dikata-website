/**
 *
 * @param {{noText?: boolean} & import("react").AllHTMLAttributes} props
 * @returns
 */
const DikataIconCircle = ({ noText = false, ...props }) => (
    <div
        className="flex w-full flex-row gap-x-1 align-middle"
        {...props}
    >
        <img
            alt="dikata logo"
            title="dikata logo"
            className="object-cover"
            src="/images/dikata-logo-circle.png"
        />
        {!noText && (
            <p className="font-inter text-lg font-bold text-black">dikata</p>
        )}
    </div>
);

export default DikataIconCircle;
