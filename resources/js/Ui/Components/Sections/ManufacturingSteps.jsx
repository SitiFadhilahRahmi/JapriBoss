import React, { useState } from "react";
import SectionInfo from "../Utils/SectionInfo";
import { manufacturingProcessSteps } from "../../../Const/Home";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

const ManufacturingSteps = () => {
    const [stepperIndex, setStepperIndex] = useState(0);

    return (
        <section className="py-24 md:py-30">
            <div className="container">
                <div className="w-full text-center">
                    <SectionInfo title="Our Manufacturing Process" />
                    <h1 className="text-3xl hidden md:block md:text-4xl lg:text-5xl font-bold mx-auto max-w-lg capitalize mt-5">
                        Our state-of-the-art facilities and skilled workforce.
                    </h1>
                </div>
                <div className="w-full mt-10 md:mt-14 justify-between hidden md:flex">
                    {manufacturingProcessSteps.map((data, index) => (
                        <div
                            className="w-full px-4 cursor-pointer"
                            onClick={() => setStepperIndex(index)}
                            key={index}
                        >
                            <div
                                className={`h-1 mb-2 rounded-xl hover:bg-slate-600 transition-all duration-300 ${
                                    index <= stepperIndex
                                        ? "bg-blue-600"
                                        : "bg-slate-400"
                                }`}
                            ></div>
                            <span
                                className={`font-medium text-xs md:text-sm ${
                                    index > stepperIndex
                                        ? "text-slate-400"
                                        : "text-blue-600"
                                }`}
                            >
                                {index === manufacturingProcessSteps.length - 1
                                    ? "Final Step"
                                    : `Step ${index + 1}`}
                            </span>
                            <h1
                                className={`font-medium ${
                                    index > stepperIndex
                                        ? "text-slate-400 bg-slate-400"
                                        : "text-black"
                                }`}
                            >
                                {data.title}
                            </h1>
                        </div>
                    ))}
                </div>
                <div className="w-full mt-10 block md:hidden">
                    <h1 className="text-blue-600 text-center font-medium text-base md:text-lg">
                        Step
                    </h1>
                    <div className="flex justify-center gap-10 mt-5">
                        <button
                            onClick={() =>
                                setStepperIndex((prev) =>
                                    prev === 0 ? 3 : prev - 1
                                )
                            }
                            className="w-10 h-10 flex justify-center items-center border-2 rounded-full"
                        >
                            <FaChevronLeft />
                        </button>
                        <h1 className="text-4xl font-bold">
                            {stepperIndex + 1}
                        </h1>
                        <button
                            onClick={() =>
                                setStepperIndex((prev) =>
                                    prev === 3 ? 0 : prev + 1
                                )
                            }
                            className="w-10 h-10 flex justify-center items-center border-2 rounded-full"
                        >
                            <FaChevronRight />
                        </button>
                    </div>
                </div>
                <div className="w-full md:px-4 mt-10 md:mt-14 max-h-[700px]">
                    <div
                        key={stepperIndex} // this re-renders the component to trigger animation
                        className="transition-all duration-500 ease-in-out opacity-0 animate-fadeIn transform translate-y-4 "
                    >
                        <h1 className="text-center font-semibold text-4xl">
                            {manufacturingProcessSteps[stepperIndex].title}
                        </h1>
                        <img
                            className="max-w-sm md:max-w-md lg::max-w-lg my-10 rounded-lg mx-auto"
                            src={`/assets/step-${stepperIndex + 1}.png`}
                            alt={manufacturingProcessSteps[stepperIndex].title}
                        />
                        <p className="max-w-md md:text-center text-sm lg:text-base mx-auto mt-5">
                            {
                                manufacturingProcessSteps[stepperIndex]
                                    .description
                            }
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManufacturingSteps;
