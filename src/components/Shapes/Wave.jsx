/**
 *
 * @param {import("react").SVGProps} props
 * @returns
 */
const Wave = ({ ...props }) => {
    return (
        <svg
            viewBox="0 0 387 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            {...props}
        >
            <path
                d="M135 0.313251C62.1949 -4.00114 14.5 37.3132 0 58.8132V199.313H386.5V158.813C382.5 158.313 342.739 161.289 337.5 161.813C332.261 162.337 307.5 165.313 293.5 165.313C283.069 165.313 267.833 155.98 261.5 150.813C222 110.313 198.5 4.07623 135 0.313251Z"
                fill="url(#paint0_linear_233_489)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_233_489"
                    x1="213"
                    y1="-21.5"
                    x2="176.5"
                    y2="286"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFDE59" />
                    <stop
                        offset="0.50039"
                        stopColor="#FFDE59"
                        stopOpacity="0.7"
                    />
                    <stop
                        offset="1"
                        stopColor="#F8F8F8"
                    />
                    <stop
                        offset="1"
                        stopColor="#F8F8F8"
                        stopOpacity="0.6"
                    />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default Wave;
