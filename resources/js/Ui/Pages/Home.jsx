import { FaArrowDown, FaArrowRight } from "react-icons/fa6";
import { Link } from "@inertiajs/react";
import SectionInfo from "../Components/Utils/SectionInfo";
import { featuredProducts, services } from "../../Const/Home";
import AlurBekerja from "../Components/Sections/AlurBekerja";
import Testimonials from "../Components/Sections/Testimonials";
import FAQ from "../Components/Sections/FAQ";
import ContactUs from "../Components/Sections/ContactUs";

export default function Home() {
    return (
        <>
            <section className="pt-10 md:pt-10 pb-0 md:pb-0 bg-opacity-80">
                <div className="container">
                    <div className="w-full flex flex-wrap-reverse items-center">
                        <div className="w-full lg:w-1/2 md:px-4">
                            <h1 className="capitalize text-5xl md:text-5xl lg:text-6xl max-w-xl font-bold md:leading-normal lg:leading-snug mt-5 mb-6">
                                anda butuh, kami siap disuruh{" "}
                                <span className="font-popins font-bold text-blue-600">
                                    JAPRIBOSS
                                </span>
                            </h1>
                            <p className="max-w-xs md:max-w-sm text-xs md:text-sm text-slate-600 mb-6 leading-relaxed md:leading-relaxed">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Et, rem. Molestias, ipsam
                                esse? Impedit, officiis ipsam.
                            </p>
                            <div className="flex gap-4 font-medium text-sm mb-10">
                                <button className="px-5 py-3 text-xs md:text-sm capitalize border border-blue-600 text-white border-opacity-50 rounded-lg bg-blue-600 hover:bg-opacity-70 hover:border-opacity-100 transition-all duration-300">
                                    Find out about us{" "}
                                    <FaArrowRight className="inline ms-3" />
                                </button>
                                <button className="px-5 py-3 text-xs md:text-sm capitalize border rounded-lg hover:border-blue-600 hover:text-white hover:border-opacity-50 hover:bg-blue-600 transition-all duration-300">
                                    Contact us
                                </button>
                            </div>
                            {/* <div className="flex gap-6 md:gap-12">
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
                            </div> */}
                        </div>
                        <div className="w-full lg:w-1/2 md:px-4 space-y-4 mb-12 lg:mb-0">
                            <img
                                src="/assets/logo3.png"
                                alt="JapriBoss hero image"
                                width={70}
                                height={70}
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-10 md:py-10">
                <div className="container ">
                    <div className="w-full">
                        <div className="flex flex-wrap mt-8">
                            <div className="w-full md:w-1/2 md:px-4">
                                <SectionInfo title="Who we are" />
                                <h1 className="text-2xl md:text-3xl max-w-xl font-semibold leading-normal mt-6">
                                    Kami adalah{" "}
                                    <span className="font-popins">
                                        JAPRIBOSS,
                                    </span>{" "}
                                    platform layanan terdepan yang didedikasikan
                                    untuk mempermudah hidup Anda.
                                </h1>
                            </div>
                            <div className="w-full md:w-1/2 md:px-4 mt-8 md:mt-10">
                                <p className="text-xs md:text-sm text-slate-600 max-w-lg mb-8 leading-relaxed md:leading-relaxed">
                                    Kami memahami bahwa waktu adalah aset paling
                                    berharga, dan itulah mengapa kami hadir
                                    sebagai solusi satu pintu untuk segala
                                    kebutuhan Anda. Dari perbaikan kecil hingga
                                    proyek besar, tim profesional kami siap
                                    melayani dengan cepat, andal, dan penuh
                                    dedikasi. Anda butuh, kami siap disuruh!
                                </p>
                                <span className="text-sm md:text-base font-medium">
                                    <span className="font-popins">
                                        JAPRIBOSS
                                    </span>{" "}
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
                                Mitra Terverifikasi
                            </span>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="font-bold text-5xl lg:text-6xl mb-4">
                                10,000+
                            </h1>
                            <span className="text-lg text-neutral-600 font-medium">
                                Pekerjaan Selesai
                            </span>
                        </div>
                        <div className="flex flex-col items-center">
                            <h1 className="font-bold text-5xl lg:text-6xl mb-4">
                                4,9/5
                            </h1>
                            <span className="text-lg text-neutral-600 font-medium">
                                Kepuasan Pelanggan
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
                            <h1 className="max-w-md font-bold text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-snug lg:leading-snug capitalize text-gray-800">
                                Apa yang{" "}
                                <span className="font-bold text-blue-600">
                                    JAPRIBOSS
                                </span>{" "}
                                lakukan untuk Anda?
                            </h1>

                            <p className="text-xs md:text-sm text-slate-600 max-w-lg mb-8 leading-relaxed md:leading-relaxed">
                                Kami berdedikasi untuk menyediakan solusi
                                praktis dan efisien untuk setiap tantangan
                                harian Anda. Kami berkomitmen untuk
                                menghubungkan Anda dengan para profesional
                                terbaik yang siap membantu, dengan menjunjung
                                tinggi standar kualitas dan kepercayaan.
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
                        <SectionInfo title="Galeri" />
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-lg capitalize">
                            Kami Mewujudkan Kebutuhan Anda
                        </h1>
                        <p className="text-sm md:text-base leading-relaxed text-slate-600 max-w-md">
                            Dari tugas sederhana hingga proyek yang lebih
                            kompleks, komitmen kami adalah memberikan solusi
                            yang memuaskan.
                        </p>
                    </div>
                    <div className="flex overflow-x-auto gap-8 p-4 snap-x">
                        {featuredProducts.map((data) => (
                            <div
                                key={data.id}
                                className="flex-none w-80 snap-center"
                            >
                                <img
                                    src={data.imageUrl}
                                    alt={data.title}
                                    className="mb-4 rounded-lg shadow-md"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <AlurBekerja />
            <section className="py-24 md:py-30">
                <div className="container">
                    <div className="w-full flex flex-wrap mx-auto items-center">
                        <div className="w-full md:w-1/2 space-y-6 md:px-4">
                            <SectionInfo title="Komitmen Kami" />
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-2xl capitalize">
                                Komitmen JAPRIBOSS pada Kualitas & Kepercayaan
                            </h1>
                            <p className="text-sm md:text-base leading-relaxed text-slate-600 max-w-lg">
                                Di JAPRIBOSS, komitmen kami adalah untuk selalu memberikan layanan terbaik yang dapat Anda andalkan.
                                Kami bukan hanya platform, melainkan tim yang berdedikasi untuk memastikan setiap permintaan Anda
                                ditangani oleh mitra profesional, terlatih, dan terpercaya. Kami menjamin transparansi, keamanan,
                                dan kepuasan di setiap langkah. Anda butuh, kami siap disuruh!
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 md:px-4 mt-10 md:mt-0">
                            <img
                                src="assets/komitmen.png"
                                className="rounded-lg w-full mx-auto"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Testimonials />
            {/* <FAQ /> */}
            <ContactUs />
        </>
    );
}
