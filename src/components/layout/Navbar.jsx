
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../assets/logo/logoBlueNobg.png";

const Navbar = () => {
    const navItems = ["HOME", "OVERVIEW", "JOURNEY", "PROJECTS", "NEWS", "FAQ"];

    const [searchQuery, setSearchQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(null);
    const [isProjectOpen, setIsProjectOpen] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)");

        const handleBreakpointChange = (event) => {
            if (event.matches) {
                setIsMenuOpen(null);
                setIsProjectOpen(false);
            }
        };

        if (mediaQuery.matches) {
            setIsMenuOpen(null);
        }

        mediaQuery.addEventListener("change", handleBreakpointChange);

        return () => {
            mediaQuery.removeEventListener("change", handleBreakpointChange);
        };
    }, []);

    return (
        <header className="w-full h-25 flex justify-between items-center gap-10 px-5 lg:px-20 border-b">

            {/* Logo */}
            <button
                className="logo w-20 h-20 flex items-center hover:cursor-pointer"
                onClick={() => navigate("/")}
            >
                <img src={logo} alt="Logo" />
            </button>

            <nav className="nav flex items-center gap-3 grow justify-end">

                {/* ================= DESKTOP NAV ================= */}
                {!isSearching && (
                    <ul className="hidden lg:flex items-center divide-x divide-neutral-300 font-cadt font-bold">
                        {navItems.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center relative"
                            >
                                {item === "PROJECTS" ? (
                                    <div className="relative">

                                        {/* Projects Button */}
                                        <button
                                            onClick={() =>
                                                setIsProjectOpen(!isProjectOpen)
                                            }
                                            className={`px-6 cursor-pointer transition-colors hover:text-brand-secondary-orange ${
                                                isProjectOpen
                                                    ? "text-brand-secondary-orange"
                                                    : "text-black"
                                            }`}
                                        >
                                            PROJECTS
                                        </button>

                                        {/* Projects Dropdown */}
                                        {isProjectOpen && (
                                            <div className="absolute top-full left-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-neutral-200 z-50">

                                                <NavLink
                                                    to="/projectsbatchII"
                                                    onClick={() =>
                                                        setIsProjectOpen(false)
                                                    }
                                                    className="block px-4 py-3 hover:bg-gray-100 hover:text-brand-secondary-orange"
                                                >
                                                    Batch II
                                                </NavLink>

                                                <NavLink
                                                    to="/projectsbatchIII"
                                                    onClick={() =>
                                                        setIsProjectOpen(false)
                                                    }
                                                    className="block px-4 py-3 hover:bg-gray-100 hover:text-brand-secondary-orange"
                                                >
                                                    Batch III
                                                </NavLink>

                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <NavLink
                                        to={
                                            item === "HOME"
                                                ? "/"
                                                : `/${item.toLowerCase()}`
                                        }
                                        className={({ isActive }) =>
                                            `px-6 cursor-pointer transition-colors hover:text-brand-secondary-orange ${
                                                isActive
                                                    ? "text-brand-secondary-orange"
                                                    : "text-black"
                                            }`
                                        }
                                    >
                                        {item}
                                    </NavLink>
                                )}
                            </li>
                        ))}
                    </ul>
                )}

                {/* ================= MOBILE MENU ICON ================= */}
                {!isSearching && !isMenuOpen && (
                    <svg
                        className="w-10 h-10 text-gray-800 dark:text-white lg:hidden"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="2"
                            d="M5 7h14M5 12h14M5 17h14"
                        />
                    </svg>
                )}

                {/* ================= MOBILE CLOSE ================= */}
                {!isSearching && isMenuOpen && (
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        onClick={() => {
                            setIsMenuOpen(false);
                            setIsProjectOpen(false);
                        }}
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18 17.94 6M18 18 6.06 6"
                        />
                    </svg>
                )}

                {/* ================= MOBILE NAV ================= */}
                <ul
                    className={`flex flex-col absolute border-t border-b border-t-brand-secondary-orange border-b-brand-secondary-orange top-22 bg-white w-9/10 left-1/20 font-cadt px-10 py-3 pb-6 z-50 ${
                        isMenuOpen === true
                            ? "animate-unroll"
                            : isMenuOpen === false
                            ? "animate-roll-up"
                            : "hidden"
                    } lg:hidden`}
                >
                    {navItems.map((item, index) => (
                        <li
                            key={index}
                            className="flex flex-col py-2 border-b border-neutral-400 cursor-pointer transition-colors hover:text-brand-secondary-orange opacity-0 animate-chain-drop"
                            style={{ "--i": index }}
                        >
                            {item === "PROJECTS" ? (
                                <>
                                    {/* Mobile Projects Button */}
                                    <button
                                        onClick={() =>
                                            setIsProjectOpen(!isProjectOpen)
                                        }
                                        className={`flex items-center justify-between w-full text-left transition-colors hover:text-brand-secondary-orange ${
                                            isProjectOpen
                                                ? "text-brand-secondary-orange"
                                                : "text-black"
                                        }`}
                                    >
                                        <span>PROJECTS</span>

                                        <span
                                            className={`text-xs transition-transform duration-200 ${
                                                isProjectOpen
                                                    ? "rotate-180"
                                                    : ""
                                            }`}
                                        >
                                            ▼
                                        </span>
                                    </button>

                                    {/* Mobile Projects Dropdown */}
                                    {isProjectOpen && (
                                        <div className="flex flex-col pl-5 pt-2">

                                            <NavLink
                                                to="/projectsbatchII"
                                                onClick={() => {
                                                    setIsProjectOpen(false);
                                                    setIsMenuOpen(false);
                                                }}
                                                className="py-2 text-black hover:text-brand-secondary-orange"
                                            >
                                                Batch II
                                            </NavLink>

                                            <NavLink
                                                to="/projectsbatchIII"
                                                onClick={() => {
                                                    setIsProjectOpen(false);
                                                    setIsMenuOpen(false);
                                                }}
                                                className="py-2 text-black hover:text-brand-secondary-orange"
                                            >
                                                Batch III
                                            </NavLink>

                                        </div>
                                    )}
                                </>
                            ) : (
                                <NavLink
                                    to={
                                        item === "HOME"
                                            ? "/"
                                            : `/${item.toLowerCase()}`
                                    }
                                    className={({ isActive }) =>
                                        `cursor-pointer transition-colors hover:text-brand-secondary-orange ${
                                            isActive
                                                ? "text-brand-secondary-orange"
                                                : "text-black"
                                        }`
                                    }
                                    onClick={() => {
                                        setIsMenuOpen(false);
                                        setIsProjectOpen(false);
                                    }}
                                >
                                    {item}
                                </NavLink>
                            )}
                        </li>
                    ))}
                </ul>

                {/* ================= SEARCH INPUT ================= */}
                {isSearching && (
                    <input
                        type="text"
                        className="rounded-3xl bg-neutral-200 p-2 w-1/2 max-w-100"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => {
                            if (
                                e.key === "Enter" &&
                                searchQuery.trim() !== ""
                            ) {
                                navigate(
                                    `/search?q=${encodeURIComponent(
                                        searchQuery
                                    )}`
                                );
                            }
                        }}
                    />
                )}

                {/* ================= SEARCH ICON ================= */}
                {!isSearching && (
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        onClick={() => {
                            setIsSearching(true);
                            setIsMenuOpen(false);
                        }}
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="2"
                            d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 1 1 14 0Z"
                        />
                    </svg>
                )}

                {/* ================= CLOSE SEARCH ================= */}
                {isSearching && (
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        onClick={() => {
                            setIsSearching(false);
                            setSearchQuery("");

                            if (window.location.pathname === "/search") {
                                navigate("/");
                            }
                        }}
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18 17.94 6M18 18 6.06 6"
                        />
                    </svg>
                )}

            </nav>
        </header>
    );
};

export default Navbar;

