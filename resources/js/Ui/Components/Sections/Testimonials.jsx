import React from "react";
import { testimonials } from "../../../Const/Home";
import SectionInfo from "../Utils/SectionInfo";

const Testimonials = () => {
    return (
        <section className="py-24 md:py-30 bg-gray-50 font-sans">
            <div className="container mx-auto px-4">
                <div className="w-full text-center">
                    <SectionInfo title="Why Choose Us" />
                    <h1 className="text-3xl hidden md:block md:text-4xl lg:text-5xl font-bold mx-auto max-w-2xl capitalize mt-5">
                        Ini yang Pelanggan Kami Katakan
                    </h1>
                </div>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-6 mt-8 md:mt-10">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="break-inside-avoid p-6 bg-neutral-50 rounded-lg"
                        >
                            <p className="text-gray-700 text-base mb-6 font-inter leading-relaxed">
                                {testimonial.quote}
                            </p>

                            <div className="flex items-start justify-between mt-auto">
                                <div className="flex items-center">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.author}
                                        className="w-12 h-12 rounded-full mr-4 object-cover border border-neutral-300"
                                        onError={(e) => {
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.src =
                                                "https://placehold.co/100x100/CCCCCC/333333?text=User";
                                        }}
                                    />
                                    <div>
                                        <p className="font-semibold text-gray-800">
                                            {testimonial.author}
                                        </p>
                                        <p className="text-sm font-semibold text-gray-300">
                                            {testimonial.handle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
