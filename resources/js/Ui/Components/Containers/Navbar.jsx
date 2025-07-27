import { Link, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import Sidebar from "./Sidebar";

const Navbar = () => {
    const [navScrol, setNavScroll] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { url } = usePage();

    const handleMenu = () => {
        document.body.classList.toggle("overflow-hidden");
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setNavScroll(true);
            } else {
                setNavScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <nav
                className={`py-4 md:py-6 fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
                    navScrol ? "navbar-fixed" : ""
                }`}
            >
                <div className="container">
                    <div className="w-full flex md:px-4 justify-between items-center">
                        <Link href={"/"}>
                            <h1 className="font-popins font-bold text-3xl text-text">
                                BRARTI
                            </h1>
                        </Link>
                        <div className="md:hidden">
                            <HiOutlineMenu
                                className="w-7 h-7"
                                onClick={handleMenu}
                            />
                        </div>
                        <div className="hidden md:flex gap-8 text-sm font-medium text-text">
                            <Link
                                className={`transition-all ${
                                    url === "/"
                                        ? "hover:opacity-70"
                                        : "opacity-70 hover:opacity-100"
                                }`}
                                href="/"
                            >
                                Home
                            </Link>
                            <Link
                                className={`transition-all ${
                                    url === "/about-us"
                                        ? "hover:opacity-50"
                                        : "opacity-70 hover:opacity-100"
                                }`}
                                href="/about-us"
                            >
                                About Us
                            </Link>
                            <Link
                                className={`transition-all ${
                                    url === "/"
                                        ? "hover:opacity-50"
                                        : "opacity-70 hover:opacity-100"
                                }`}
                                href="/"
                            >
                                Service
                            </Link>
                            <Link
                                className={`transition-all ${
                                    url === "/"
                                        ? "hover:opacity-50"
                                        : "opacity-70 hover:opacity-100"
                                }`}
                                href="/"
                            >
                                Blog
                            </Link>
                            <Link
                                className={`transition-all ${
                                    url === "/"
                                        ? "hover:opacity-50"
                                        : "opacity-70 hover:opacity-100"
                                }`}
                                href="/"
                            >
                                Teams
                            </Link>
                            <Link
                                className={`transition-all ${
                                    url === "/"
                                        ? "hover:opacity-50"
                                        : "opacity-70 hover:opacity-100"
                                }`}
                                href="/"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <Sidebar isOpen={isOpen} handleMenu={handleMenu} />
        </>
    );
};

export default Navbar;
