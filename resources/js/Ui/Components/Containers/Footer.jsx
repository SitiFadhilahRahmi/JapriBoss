import React from "react";
import { socialMedia } from "../../../Const/Home";

const Footer = () => {
    return (
        <footer className="pt-24 pb-12 bg-black text-white">
            <div className="container">
                <div className="w-full md:w-1/2 mb-14 space-y-6">
                    <h1 className="font-popins text-xl lg:text-2xl font-bold text-white">
                        JAPRIBOSS
                    </h1>
                    <p className="text-sm leading-relaxed max-w-md text-slate-300">
                        Anda butuh, kami siap disuruh!
                    </p>
                    <div className="flex gap-5">
                        {socialMedia.map((data) => (
                            <data.icon
                                key={data.platform}
                                className="w-6 h-6 text-neutral-400 hover:text-white transition"
                            />
                        ))}
                    </div>
                </div>

                {/* Grid Footer Links */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-sm text-slate-300">
                    <div>
                        <h3 className="text-white font-semibold mb-5 text-base">
                            Solutions
                        </h3>
                        <ul className="space-y-2">
                            <li>Marketing</li>
                            <li>Analytics</li>
                            <li>Automation</li>
                            <li>Commerce</li>
                            <li>Insights</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-5 text-base">
                            Support
                        </h3>
                        <ul className="space-y-2">
                            <li>Submit ticket</li>
                            <li>Documentation</li>
                            <li>Guides</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-5 text-base">
                            Company
                        </h3>
                        <ul className="space-y-2">
                            <li>About</li>
                            <li>Blog</li>
                            <li>Jobs</li>
                            <li>Press</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-5 text-base">
                            Legal
                        </h3>
                        <ul className="space-y-2">
                            <li>Terms of service</li>
                            <li>Privacy policy</li>
                            <li>License</li>
                        </ul>
                    </div>
                </div>

                {/* Garis dan Copyright */}
                <div className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-300">
                    © 2025 JAPRIBOSS, Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
