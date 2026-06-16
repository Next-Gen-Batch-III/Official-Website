import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../assets/logo/logoBlueNobg.png";
const Navbar = () => {
    const navItems = ["HOME", "OVERVIEW", "JOURNEY", "PROJECTS", "NEWS", "FAQ"];
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [ isMenuOpen, setIsMenuOpen] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 1024px)');
        const handleBreakpointChange = (event) => {
            if (event.matches) {
                setIsMenuOpen(null);
            }
        };
        if (mediaQuery.matches) {
            setIsMenuOpen(null);
        }
        mediaQuery.addEventListener('change', handleBreakpointChange);
        return () => {
            mediaQuery.removeEventListener('change', handleBreakpointChange);
        };
    }, []);
    return (
        <header className="w-full h-25 flex justify-between items-center gap-10 px-5 lg:px-20 border-b">
            <div className="logo w-20 h-20 flex items-center">
                <img src={logo} alt="Logo" />
            </div> 
            <nav className="nav flex items-center gap-3 grow justify-end">
                { !isSearching && (<ul className="hidden lg:flex items-center divide-x divide-neutral-300 font-cadt font-bold">
                    {navItems.map((item, index) => (
                        <li key={index} className="flex items-center">
                            <NavLink
                                to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                                className={({ isActive }) => 
                                    `px-6 cursor-pointer transition-colors hover:text-brand-secondary-orange ${
                                        isActive ? "text-brand-secondary-orange" : "text-black"
                                    }`
                                }
                            >
                                {item}
                            </NavLink>
                        </li>
                    ))}
                </ul>)}
                { (!isSearching && !isMenuOpen) && (
                    <svg className="w-10 h-10 text-gray-800 dark:text-white lg:hidden" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" onClick={() => setIsMenuOpen(true)}>
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
                    </svg>
                )}

                { (!isSearching && isMenuOpen) && (
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" onClick={() => { setIsMenuOpen(false); }}>
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                    </svg>
                )}

                <ul className={`flex flex-col absolute border-t border-b border-t-brand-secondary-orange border-b-brand-secondary-orange top-22 bg-white w-9/10 left-1/20 font-cadt px-10 py-3 pb-6 z-50 ${isMenuOpen === true ? "animate-unroll" : isMenuOpen === false ? "animate-roll-up" : "hidden"} lg:hidden`}>
                    {navItems.map((item, index) => (
                        <li key={index} className={`flex items-center py-2 border-b border-neutral-400 cursor-pointer transition-colors hover:text-brand-secondary-orange opacity-0 animate-chain-drop`}
                            style={{ '--i': index }}
                        >
                            <NavLink
                                to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                                className={({ isActive }) => 
                                    `cursor-pointer transition-colors hover:text-brand-secondary-orange ${
                                        isActive ? "text-brand-secondary-orange" : "text-black"
                                    }`
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {isSearching && (
                    <input 
                        type="text" 
                        className="rounded-3xl bg-neutral-200 p-2 w-1/2 max-w-100" 
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && searchQuery.trim() !== '') {
                                navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
                            }
                        }}
                    />
                )}
                { !isSearching && (
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" onClick={() => {setIsSearching(true); setIsMenuOpen(false);}}>
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                    </svg>
                )}
                {isSearching && (
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" 
                        onClick={() => { 
                            setIsSearching(false); 
                            setSearchQuery("");
                            if(window.location.pathname === "/search") {
                                navigate("/");
                            }
                             }}>
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                    </svg>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
