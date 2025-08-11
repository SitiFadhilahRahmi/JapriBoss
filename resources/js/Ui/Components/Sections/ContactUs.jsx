import React from "react";
import SectionInfo from "../Utils/SectionInfo";

const ContactUs = () => {
    return (
        <section className="py-24 md:py-30">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 md:px-4 space-y-6 mb-8 md:mb-10">
                        <SectionInfo title="Contact Us" />
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-lg capitalize">
                            Mau nanya-nanya?
                        </h1>
                        <div className="flex flex-col gap-5">
                            <div className="space-y-2">
                                <h4 className="font-medium text-sm md:text-base">
                                    Contact Person
                                </h4>
                                <p className="text-xs md:text-sm font-medium">
                                    Anonymous | Vice President
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-medium text-sm md:text-base">
                                    Email
                                </h4>
                                <p className="text-xs md:text-sm font-medium">
                                    <a
                                        className="underline"
                                        href="mailto:japriboss@gmail.com"
                                    >
                                        japriboss@gmail.com
                                    </a>{" "}
                                    or{" "}
                                    <a
                                        className="underline"
                                        href="mailto:japriboss@gmail.com"
                                    >
                                        japriboss@gmail.com

                                    </a>
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-medium text-sm md:text-base">
                                    Telephone
                                </h4>
                                <p className="text-xs md:text-sm font-medium">
                                    +62 812-1234-1234
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 md:px-4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d617.6046428270555!2d100.18331723854767!3d-0.693718123649167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1754901794877!5m2!1sid!2sid"
                            width="600"
                            height="450"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
