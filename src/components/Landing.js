import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Landing() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className="mx-auto flex h-24 items-center justify-between bg-[#2B2D42] px-4 text-white">
            <ul className="hidden md:flex">
                <Link to="/sign-in">
                    <li className="p-4">Sign In</li>
                </Link>
                <Link to="/sign-up">
                    <li className="p-4">Sign Up</li>
                </Link>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {nav ? (
                    <AiOutlineClose size={20} />
                ) : (
                    <AiOutlineMenu size={20} />
                )}
            </div>
            <ul
                className={
                    nav
                        ? "fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300] duration-500 ease-in-out"
                        : "fixed left-[-100%] duration-500 ease-in-out"
                }
            >
                <Link to="/sign-in">
                    <li className="border-b border-gray-600 p-4">Sign In</li>
                </Link>
                <Link to="/sign-up">
                    <li className="border-b border-gray-600 p-4">Sign Up</li>
                </Link>
            </ul>
        </div>
    );
}