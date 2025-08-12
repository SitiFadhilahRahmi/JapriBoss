import { Link } from "@inertiajs/react";

const Sidebar = ({ isOpen, handleMenu }) => {
    return (
        <>
            {/* Sidebar */}
            <aside
                id="sidebar-responsive"
                className={`fixed top-0 right-0 z-[100] w-[80%] h-screen transition-transform duration-300 ease-in-out sm:hidden ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-900">
                    {/* Header Sidebar */}
                    <div className="flex items-center p-2 my-5 justify-between">
                        <Link
                            onClick={handleMenu}
                            href="/"
                            className="self-center text-2xl font-playFair font-bold whitespace-nowrap text-white"
                        ></Link>
                        <button
                            onClick={handleMenu}
                            className="text-slate-300 hover:text-white text-xl"
                            aria-label="Close Menu"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Menu Links */}
                    <ul className="space-y-1">
                        {[
                            { name: "Home", href: "/" },
                            { name: "About Us", href: "/portfolios" },
                            { name: "Blog", href: "/" },
                            { name: "Service", href: "/" },
                            { name: "Contact Us", href: "/" },
                        ].map((item, index) => (
                            <li key={index}>
                                <Link
                                    onClick={handleMenu}
                                    href={item.href}
                                    className="flex items-center p-3 rounded-lg text-slate-200 hover:bg-neutral-800 transition text-base"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>

            {/* Overlay background */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-[99]"
                    aria-hidden="true"
                    onClick={handleMenu}
                ></div>
            )}
        </>
    );
};

export default Sidebar;
