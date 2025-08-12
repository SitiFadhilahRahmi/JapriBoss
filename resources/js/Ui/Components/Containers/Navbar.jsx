import { Link, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import Sidebar from "./Sidebar";

const Navbar = () => {
    const [navScroll, setNavScroll] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { url } = usePage();

    const handleMenu = () => {
        document.body.classList.toggle("overflow-hidden");
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleScroll = () => {
            setNavScroll(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about-us" },
        { name: "Service", href: "/service" },
        { name: "Teams", href: "/teams" },
        { name: "Contact Us", href: "/contact-us" },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
                    navScroll
                        ? "bg-white/80 backdrop-blur shadow-sm"
                        : "bg-transparent"
                }`}
            >
                <div className="container">
                    <div className="flex justify-between items-center py-3 md:py-5">
                        {/* Logo */}
                        <Link href={"/"}>
                            <h1 className="font-popins font-bold text-2xl md:text-3xl text-text">
                                JAPRIBOSS
                            </h1>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 rounded hover:bg-gray-100"
                            onClick={handleMenu}
                            aria-label="Open Menu"
                        >
                            <HiOutlineMenu className="w-7 h-7" />
                        </button>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex gap-8 text-sm font-medium text-text">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`relative transition-all ${
                                        url === link.href
                                            ? "text-primary font-semibold after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-primary after:bottom-[-4px] after:left-0"
                                            : "opacity-70 hover:opacity-100"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Sidebar for mobile */}
            <Sidebar isOpen={isOpen} handleMenu={handleMenu} />
        </>
    );
};

export default Navbar;
