import React from "react";
import Testimonials from "../Components/Sections/Testimonials";
import FAQ from "../Components/Sections/FAQ";
import ContactUs from "../Components/Sections/ContactUs";
import SectionInfo from "../Components/Utils/SectionInfo";

const AboutUs = () => {
    return (
        <>
            <section className="py-24 md:py-30 overflow-hidden">
                <div className="relative bg-black text-white py-56 md:py-72">
                    <img
                        src={"assets/about-us.jpg"}
                        alt="Bitcoin Banner"
                        className="absolute inset-0 w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 w-full p-20 text-white bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end">
                        <p className="text-xs md:text-sm opacity-80 text-center">
                            About Us
                        </p>
                        <h1 className="text-lg capitalize sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-center max-w-3xl mx-auto">
                            Our Vision and our mision{" "}
                        </h1>
                    </div>
                </div>
            </section>
            <section className="py-24 md:py-30">
                <div className="container">
                    <div className="w-full flex flex-wrap mx-auto items-center">
                        <div className="w-full md:w-1/2 md:px-4">
                            <div className="space-y-6 w-full md:w-4/5 mx-auto">
                                <SectionInfo title="Our Vision" />
                                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold max-w-2xl capitalize">
                                    Shaping a Sustainable Future
                                </h1>
                                <p className="text-xs md:text-sm leading-relaxed text-slate-600 max-w-sm">
                                    At BRARTI, our vision is to lead the
                                    transformation of the textile industry
                                    through sustainability and innovation. We
                                    strive to create long-lasting positive
                                    impact by embracing eco-conscious practices
                                    that inspire change and preserve our planet
                                    for future generations.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 md:px-4 mt-10 md:mt-0">
                            <img
                                src="assets/our-vision.jpg"
                                className="rounded-lg w-full mx-auto"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 md:py-30">
                <div className="container">
                    <div className="w-full flex flex-wrap mx-auto items-center">
                        <div className="w-full md:w-1/2 md:px-4 mt-10 md:mt-0">
                            <img
                                src="assets/our-mision.jpg"
                                className="rounded-lg w-full mx-auto"
                                alt=""
                            />
                        </div>
                        <div className="w-full md:w-1/2 md:px-4">
                            <div className="space-y-6 w-full md:w-4/5 mx-auto">
                                <SectionInfo title="Our Vision" />
                                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold max-w-2xl capitalize">
                                    Acting Responsibly, Producing Consciously
                                </h1>
                                <p className="text-xs md:text-sm leading-relaxed text-slate-600 max-w-sm">
                                    Our mission is to deliver high-quality
                                    textiles through ethical manufacturing,
                                    sustainable sourcing, and innovative design.
                                    We are committed to minimizing our
                                    environmental impact while empowering our
                                    community and partners to do the same.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Testimonials />
            <FAQ />
        </>
    );
};

export default AboutUs;
