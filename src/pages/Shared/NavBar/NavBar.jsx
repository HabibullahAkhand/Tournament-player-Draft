import { NavLink } from "react-router-dom";

const NavBar = () => {
    const navOptions = (
        <>
            <li className="hover:text-green-400 transition duration-300"><NavLink to="/">Home</NavLink></li>
            <li className="hover:text-green-400 transition duration-300"><NavLink to="/allPlayer">All Players</NavLink></li>
            <li className="hover:text-green-400 transition duration-300"><NavLink to="/teams">Teams</NavLink></li>
            <li className="hover:text-green-400 transition duration-300"><NavLink to="/fixtures">Fixtures</NavLink></li>
        </>
    );

    return (
        <div className="navbar bg-gradient-to-r from-blue-800 via-blue-600 to-green-600 text-white shadow-lg">
            {/* Navbar Left (Logo & Mobile Menu Button) */}
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white text-black rounded-box w-52"
                    >
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-2xl font-extrabold tracking-wide">
                    ⚽ REC Tournament
                </a>
            </div>

            {/* Navbar Center (Horizontal Menu for Large Screens) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-4 space-x-8 font-semibold">
                    {navOptions}
                </ul>
            </div>

            {/* Navbar Right (Action Button) */}
            <div className="navbar-end">
                <a className="btn bg-green-500 hover:bg-green-400 text-white font-semibold transition duration-300 shadow-md">
                    Get Started
                </a>
            </div>
        </div>
    );
};

export default NavBar;
