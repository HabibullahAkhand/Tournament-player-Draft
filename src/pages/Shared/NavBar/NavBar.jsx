import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navOptions = (
        <>
            <li className="hover:text-[#032F30] transition duration-300">
                <NavLink to="/">Home</NavLink>
            </li>
            <li className="hover:text-[#6BA3BE] transition duration-300">
                <NavLink to="/allPlayer">All Players</NavLink>
            </li>
            <li className="hover:text-[#274D60] transition duration-300">
                <NavLink to="/teams">Teams</NavLink>
            </li>
            <li className="hover:text-[#031716] transition duration-300">
                <NavLink to="/fixtures">Fixtures</NavLink>
            </li>
            <li className="hover:text-[#031716] transition duration-300">
                <NavLink to="/pointTable">Point Table</NavLink>
            </li>
        </>
    );

    return (
        <nav className="navbar bg-[#0A7075] text-[#FDE047] shadow-lg mb-4">
            {/* Navbar Start - Logo & Dropdown Menu Button */}
            <div className="navbar-start flex items-center">
                <a className="btn btn-ghost normal-case text-2xl font-extrabold tracking-wide">
                    ⚽ REC Sports Club
                </a>
                {/* Toggle Button for Small Screens */}
                <button 
                    className="lg:hidden ml-auto p-2 focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg 
                        className="w-6 h-6 text-[#FDE047]" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M4 6h16M4 12h16m-7 6h7" 
                        ></path>
                    </svg>
                </button>
            </div>

            {/* Navbar Center - Horizontal Menu for Large Screens */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-4 space-x-8 font-semibold">
                    {navOptions}
                </ul>
            </div>

            {/* Dropdown Menu for Small Screens */}
            {isOpen && (
                <div className="navbar-center lg:hidden">
                    <ul className="menu menu-vertical p-4 space-y-2 font-semibold bg-[#0A7075] text-[#FDE047] shadow-lg">
                        {navOptions}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
