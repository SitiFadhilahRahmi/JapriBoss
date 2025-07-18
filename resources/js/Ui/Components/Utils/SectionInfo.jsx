import clsx from "clsx";

const SectionInfo = ({ title = "Untitled Section", className = "" }) => {
    return (
        <span
            className={clsx(
                "border-2 px-4 py-3 font-semibold capitalize text-xs md:text-sm rounded-full",
                className
            )}
        >
            {title}
        </span>
    );
};

export default SectionInfo;
