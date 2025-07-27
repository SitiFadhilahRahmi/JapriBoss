import React, { useState } from "react";
import SectionInfo from "../Utils/SectionInfo";
import { faqData } from "../../../Const/Home";
import { FaChevronDown } from "react-icons/fa";

const FAQ = () => {
    const [categoryIndex, setCategoryIndex] = useState(0);
    const [content, setContent] = useState(faqData[0].content);
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="py-24 md:py-30">
            <div className="container">
                <div className="w-full md:px-4 space-y-6 mb-8 md:mb-10">
                    <SectionInfo title="Frequently Asked Questions" />
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-lg capitalize">
                        Visit our Help Center
                    </h1>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-4">
                    <div className="md:px-4">
                        {faqData.map((data, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setCategoryIndex(index);
                                    setContent(data.content);
                                    setActiveIndex(null);
                                }}
                                className={`p-4 border-s-2 transition-all duration-200 text-sm md:text-base font-medium ${
                                    categoryIndex === index
                                        ? "border-blue-600"
                                        : "border-slate-400 text-slate-400"
                                }`}
                            >
                                {data.category}
                            </button>
                        ))}
                    </div>
                    <div className="md:px-4 col-span-3">
                        {content.map((data, index) => (
                            <div key={index}>
                                <div
                                    onClick={() => setActiveIndex(index)}
                                    className="py-5 cursor-pointer flex justify-between items-center"
                                >
                                    <h1
                                        className={`text-base md:text-lg lg:text-xl ${
                                            activeIndex === index
                                                ? "text-black"
                                                : "text-slate-600"
                                        }`}
                                    >
                                        {data.question}
                                    </h1>
                                    <FaChevronDown
                                        className={`w-4 h-4 transition-all duration-300 ${
                                            activeIndex === index
                                                ? "text-black rotate-180"
                                                : "text-slate-400"
                                        }`}
                                    />
                                </div>
                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                                        activeIndex === index
                                            ? "max-h-40 opacity-100"
                                            : "max-h-0 opacity-0"
                                    }`}
                                >
                                    <p className="w-3/4 mb-4 text-sm md:text-base text-slate-600 leading-relaxed md:leading-relaxed lg:leading-relaxed">
                                        {data.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
