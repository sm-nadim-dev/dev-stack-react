import logo from "../assets/logo-text.png";
import { FaBars } from "react-icons/fa";

function Navbar() {
    return (
        <>
            <nav className="sticky top-0 border-b border-b-gray-100 bg-white">
                <div className="container mx-auto flex h-16 items-center justify-between px-4">

                    {/* Mobile Hamburger / Desktop Logo */}
                    <div className="flex items-center">
                        <button className="text-xl text-[#334155] md:hidden">
                            <FaBars />
                        </button>

                        <div className="hidden md:block">
                            <img src={logo} alt="Dev Stack" />
                        </div>
                    </div>

                    {/* Mobile Logo */}
                    <div className="md:hidden">
                        <img src={logo} alt="Dev Stack" className="h-8" />
                    </div>

                    {/* Desktop Menu */}
                    <div>
                        <ul className="hidden gap-8 text-sm font-medium text-gray-700 md:flex">
                            <li className="text-[#db2777]">Home</li>
                            <li className="text-[#475569]">Technologies</li>
                            <li className="text-[#475569]">Projects</li>
                            <li className="text-[#475569]">About</li>
                            <li className="text-[#475569]">Contact</li>
                        </ul>
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="cursor-pointer text-xs text-[#334155] md:text-sm">
                            Sign In
                        </button>

                        <button className="cursor-pointer rounded-full bg-[#d91b7e] px-3 py-2 text-xs font-semibold text-white md:px-4 md:text-sm">
                            Sign Up
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;