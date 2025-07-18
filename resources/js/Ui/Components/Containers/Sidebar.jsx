import { Link } from "@inertiajs/react";

const Sidebar = ({ isOpen, handleMenu }) => {
    return (
        <>
            <aside
                id="sidebar-responsive"
                className={`fixed top-0 right-0 z-[100] w-64 h-screen transition-transform sm:hidden ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-neutral-900">
                    <div className="flex items-center p-2 my-5 justify-between">
                        <Link
                            onClick={handleMenu}
                            href="/"
                            className="self-center text-2xl font-playFair font-bold whitespace-nowrap"
                        >
                            AYW.
                        </Link>
                    </div>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                onClick={handleMenu}
                                href="/"
                                className="flex items-center p-2 text-slate-200 rounded-lg hover:bg-neutral-800 group"
                            >
                                <span className="text-sm">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={handleMenu}
                                href="/portolios"
                                className="flex items-center p-2 text-slate-200 rounded-lg hover:bg-neutral-800 group"
                            >
                                <span className="text-sm">About Us</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={handleMenu}
                                href="/"
                                className="flex items-center p-2 text-slate-200 rounded-lg hover:bg-neutral-800 group"
                            >
                                <span className="text-sm">Blog</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={handleMenu}
                                href="/"
                                className="flex items-center p-2 text-slate-200 rounded-lg hover:bg-neutral-800 group"
                            >
                                <span className="text-sm">Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                onClick={handleMenu}
                                href="/"
                                className="flex items-center p-2 text-slate-200 rounded-lg hover:bg-neutral-800 group"
                            >
                                <span className="text-sm">Contact Us</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>

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
