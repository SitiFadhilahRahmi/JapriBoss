import React from "react";
import { socialMedia } from "../../../Const/Home";

const Footer = () => {
    return (
        <footer className="pt-16 pb-8 bg-black text-white">
            <div className="container mx-auto px-4">
                {/* Bagian atas footer */}
                <div className="flex flex-col md:flex-row md:justify-between gap-10 mb-12">
                    {/* Brand & Deskripsi */}
                    <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                        <h1 className="font-popins text-2xl font-bold">JAPRIBOSS</h1>
                        <p className="text-sm leading-relaxed max-w-md mx-auto md:mx-0 text-slate-300">
                            Anda butuh, kami siap disuruh!
                        </p>
                        <div className="flex justify-center md:justify-start gap-5">
                            {socialMedia.map((data, index) => (
                                <data.icon
                                    key={`${data.platform}-${index}`}
                                    className="w-6 h-6 text-neutral-400 hover:text-white transition"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Grid Footer Links */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm text-slate-300 text-center sm:text-left">
                        <div>
                            <h3 className="text-white font-semibold mb-4 text-base">
                                Solutions
                            </h3>
                            <ul className="space-y-2">
                                <li className="hover:text-white transition">Marketing</li>
                                <li className="hover:text-white transition">Analytics</li>
                                <li className="hover:text-white transition">Automation</li>
                                <li className="hover:text-white transition">Commerce</li>
                                <li className="hover:text-white transition">Insights</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-4 text-base">
                                Support
                            </h3>
                            <ul className="space-y-2">
                                <li className="hover:text-white transition">Submit ticket</li>
                                <li className="hover:text-white transition">Documentation</li>
                                <li className="hover:text-white transition">Guides</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-4 text-base">
                                Company
                            </h3>
                            <ul className="space-y-2">
                                <li className="hover:text-white transition">About</li>
                                <li className="hover:text-white transition">Blog</li>
                                <li className="hover:text-white transition">Jobs</li>
                                <li className="hover:text-white transition">Press</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-4 text-base">
                                Legal
                            </h3>
                            <ul className="space-y-2">
                                <li className="hover:text-white transition">Terms of service</li>
                                <li className="hover:text-white transition">Privacy policy</li>
                                <li className="hover:text-white transition">License</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Garis & Copyright */}
                <div className="border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
                    © 2025 JAPRIBOSS, Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
