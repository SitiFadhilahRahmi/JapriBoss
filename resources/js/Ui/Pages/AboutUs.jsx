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
                        src={"assets/logo2.png"}
                        alt="Bitcoin Banner"
                        className="absolute inset-0 w-full h-full object-cover opacity-50"
                    />
                    <div className="absolute inset-0 w-full p-20 text-white bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end">
                        <p className="text-xs md:text-sm opacity-80 text-center">
                            About Us
                        </p>
                        <h1 className="text-lg capitalize sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-center max-w-3xl mx-auto">
                            Visi Misi Kami{" "}
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
                                    Visi Kami
                                </h1>
                                <p className="text-xs md:text-sm leading-relaxed text-slate-600 max-w-sm">
                                    Menjadi platform layanan terdepan dan terpercaya
                                    yang menjadi solusi utama bagi setiap kebutuhan harian masyarakat,
                                    menciptakan ekosistem di mana setiap orang dapat
                                    dengan mudah mendapatkan bantuan profesional.
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
                                <SectionInfo title="Our Mission" />
                                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold max-w-2xl capitalize">
                                    Misi Kami
                                </h1>
                                <p className="text-xs md:text-sm leading-relaxed text-slate-600 max-w-sm">
                                    Misi kami adalah menjadi jembatan terpercaya yang secara cerdas
                                    menghubungkan pelanggan dengan jaringan mitra jasa profesional, terverifikasi, dan andal.
                                    Kami berkomitmen untuk mempermudah setiap aspek kehidupan sehari-hari dengan
                                    menyediakan solusi yang cepat, efisien, dan transparan,
                                    mulai dari urusan rumah tangga, perbaikan, hingga kebutuhan profesional.
                                    Melalui teknologi inovatif kami, kami berupaya menciptakan platform yang tidak hanya memberikan kemudahan
                                    bagi pelanggan, tetapi juga memberdayakan para mitra kami dengan peluang kerja yang adil dan berkelanjutan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Testimonials />
            {/* <FAQ /> */}
        </>
    );
};

export default AboutUs;
