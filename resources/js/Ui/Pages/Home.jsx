import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import { Link } from "@inertiajs/react";
import SectionInfo from "../Components/Utils/SectionInfo";
import { featuredProducts, services } from "../../Const/Home";
import ManufacturingSteps from "../Components/Sections/ManufacturingSteps";
import Testimonials from "../Components/Sections/Testimonials";
import FAQ from "../Components/Sections/FAQ";
import ContactUs from "../Components/Sections/ContactUs";

export default function Home() {
    return (
        <>
            <section className="pt-20 md:pt-40 pb-0 md:pb-24 bg-opacity-80">
                <div className="container">
                    <div className="w-full flex flex-wrap-reverse items-center">
                        <div className="w-full lg:w-1/2 md:px-4">
                            <SectionInfo title="partners pioneer together" />
                            <h1 className="capitalize text-5xl md:text-5xl lg:text-6xl max-w-xl font-semibold md:leading-normal  lg:leading-normal mt-5 mb-6">
                                your brand journey can start from here, with us{" "}
                                <span className="font-popins font-bold text-blue-600">
                                    BRARTI
                                </span>
                            </h1>
                            <p className="max-w-xs md:max-w-sm text-xs md:text-sm text-slate-600 mb-6 leading-relaxed md:leading-relaxed">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Et, rem. Molestias, ipsam
                                esse? Impedit, officiis ipsam.
                            </p>
                            <div className="flex gap-4 font-medium text-sm mb-10">
                                <button className="px-5 py-3 text-xs md:text-sm capitalize border border-blue-600 text-white border-opacity-50 rounded-lg bg-blue-600 hover:bg-opacity-70 hover:border-opacity-100 transition-all duration-300">
                                    Start your brand with us{" "}
                                    <FaArrowRight className="inline ms-3" />
                                </button>
                                <button className="px-5 py-3 text-xs md:text-sm capitalize border rounded-lg hover:border-blue-600 hover:text-white hover:border-opacity-50 hover:bg-blue-600 transition-all duration-300">
                                    Contact us
                                </button>
                            </div>
                            <div className="flex gap-6 md:gap-12">
                                <div className="flex flex-col items-center">
                                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
                                        100+
                                    </h1>
                                    <span className="text-xs md:text-sm">
                                        Busines Partner
                                    </span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
                                        50+
                                    </h1>
                                    <span className="text-xs md:text-sm">
                                        Collaborated Brand
                                    </span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
                                        99.9%
                                    </h1>
                                    <span className="text-xs md:text-sm">
                                        Quality Asurance
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 md:px-4 space-y-4 mb-12 lg:mb-0">
                            <img
                                src="/assets/hero-image.png"
                                alt="Brarti hero image"
                                width={70}
                                height={70}
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 md:py-30">
                <div className="container ">
                    <div className="w-full">
                        <div className="flex flex-wrap mt-8">
                            <div className="w-full md:w-1/2 md:px-4">
                                <SectionInfo title="Who we are" />
                                <h1 className="text-2xl md:text-3xl max-w-xl font-semibold leading-normal mt-6">
                                    For over 10 years,{" "}
                                    <span className="font-popins">BRARTI</span>{" "}
                                    has been a leading force in textile
                                    manufacturing, blending traditional
                                    craftsmanship with cutting-edge technology.
                                </h1>
                            </div>
                            <div className="w-full md:w-1/2 md:px-4 mt-8 md:mt-10">
                                <p className="text-xs md:text-sm text-slate-600 max-w-lg mb-8 leading-relaxed md:leading-relaxed">
                                    We are committed to producing high-quality
                                    fabrics that meet the diverse needs of our
                                    clients while upholding the highest
                                    standards of sustainability and ethical
                                    practices.
                                </p>
                                <span className="text-sm md:text-base font-medium">
                                    <span className="font-popins">BRARTI</span>{" "}
                                    in numbers
                                    <FaArrowDown className="inline ms-4 animate-bounce" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <hr className="my-12 border-1.5 border-slate-200 rounded-full" />
                    <div className="flex md:px-4 flex-col gap-14 md:flex-row justify-center flex-wrap md:justify-between md:max-w-7xl md:mx-auto">
                        <div className="flex flex-col items-center">
                            <h1 className="font-bold text-5xl lg:text-6xl mb-4">
                                2,500+
                            </h1>
                            <span className="text-lg text-neutral-600 font-medium">
                                Employees
                            </span>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="font-bold text-5xl lg:text-6xl mb-4">
                                2,000+ tons
                            </h1>
                            <span className="text-lg text-neutral-600 font-medium">
                                Import Volume / Month
                            </span>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="font-bold text-5xl lg:text-6xl mb-4">
                                3rd largest
                            </h1>
                            <span className="text-lg text-neutral-600 font-medium">
                                Textile Company Globally
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 md:py-30">
                <div className="container mx-auto px-4">
                    <div className="w-full flex flex-col lg:flex-row-reverse items-center lg:items-start">
                        <div className="w-full lg:w-1/2 md:px-4 mb-10 lg:mb-0 space-y-6 lg:pl-12">
                            <SectionInfo title="What we do" />
                            <h1 className="max-w-md font-semibold text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-snug lg:leading-snug capitalize text-gray-800">
                                What{" "}
                                <span className="font-bold text-blue-600">
                                    BRARTI
                                </span>{" "}
                                do for you and your brand
                            </h1>

                            <p className="text-xs md:text-sm text-slate-600 max-w-lg mb-8 leading-relaxed md:leading-relaxed">
                                We are committed to producing high-quality
                                fabrics that meet the diverse needs of our
                                clients while upholding the highest standards of
                                sustainability and ethical practices.
                            </p>

                            <Link
                                href="/services"
                                className="inline-block mt-4 text-sm font-medium hover:text-opacity-80 transition duration-300"
                            >
                                Click for more detail →
                            </Link>
                        </div>
                        <div className="w-full lg:w-1/2 md:px-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {services.map((data, index) => (
                                <div
                                    className="bg-gray-50 rounded-xl shadow-md p-6 flex flex-col items-start space-y-4 transition-transform transform hover:translate-y-[-5px] duration-300 ease-in-out border border-gray-100"
                                    key={index}
                                >
                                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 shadow-sm">
                                        {data.icon && (
                                            <data.icon className="w-7 h-7" />
                                        )}
                                    </div>
                                    <h3 className="font-bold text-xl text-gray-800">
                                        {data.title}
                                    </h3>
                                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                                        {data.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 md:py-30">
                <div className="container">
                    <div className="w-full md:px-4 space-y-6 mb-8 md:mb-10">
                        <SectionInfo title="Our Featured Textiles" />
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-lg capitalize">
                            Discover a selection of our textile products
                        </h1>
                        <p className="text-sm md:text-base leading-relaxed text-slate-600 max-w-md">
                            rom timeless classics to cutting-edge fabrics, these
                            featured items represent our commitment to
                            excellence and our ability to meet diverse industry
                            demands.
                        </p>
                    </div>
                    <div className="grid md:px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredProducts.map((data) => (
                            <div key={data.id}>
                                <img
                                    src={data.imageUrl}
                                    alt={data.title}
                                    className="mb-4"
                                />
                                <span className="text-xs md:text-sm mb-4 text-blue-600">
                                    {data.category}
                                </span>
                                <h1 className="text-base font-medium md:text-lg">
                                    {data.name}
                                </h1>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <ManufacturingSteps />
            <section className="py-24 md:py-30">
                <div className="container">
                    <div className="w-full flex flex-wrap mx-auto items-center">
                        <div className="w-full md:w-1/2 space-y-6 md:px-4">
                            <SectionInfo title="Our Commitment" />
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl capitalize">
                                Our Commitment to Sustainability
                            </h1>
                            <p className="text-sm md:text-base leading-relaxed text-slate-600 max-w-lg">
                                At BRARTI, we believe in responsible
                                manufacturing. We are dedicated to sourcing
                                eco-friendly materials, minimizing waste, and
                                implementing energy-efficient processes to
                                create textiles that are not only high-quality
                                but also kind to our planet.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 md:px-4 mt-10 md:mt-0">
                            <img
                                src="assets/our-commitment.jpg"
                                className="rounded-lg w-full mx-auto"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Testimonials />
            <FAQ />
            <ContactUs />
        </>
    );
}
