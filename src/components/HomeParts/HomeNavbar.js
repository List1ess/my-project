import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

// Images
import Logo from "../../images/Logo.png";

export default function HomeNavbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="mx-auto flex h-24 items-center justify-between bg-[#2B2D42] px-4 text-white">
      <Link to="/">
        <img src={Logo} alt="" className="w-128" />
      </Link>
      <ul className="hidden md:flex">
        <Link to="/">
          <li className="p-4">Home</li>
        </Link>

        <Link to="/Tech">
          <li className="p-4">Tech</li>
        </Link>

        <Link to="/Archive">
          <li className="p-4">Archive</li>
        </Link>

        <Link to="/Content">
          <li className="p-4">Content</li>
        </Link>

        <Link to="/Media">
          <li className="p-4">Media</li>
        </Link>

        <Link to="/Mission">
          <li className="p-4">Mission</li>
        </Link>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300] duration-500 ease-in-out"
            : "fixed left-[-100%] duration-500 ease-in-out"
        }
      >
        <li className="border-b border-gray-600 p-4">Home</li>
        <li className="border-b border-gray-600 p-4">Tech</li>
        <li className="border-b border-gray-600 p-4">Archive</li>
        <li className="border-b border-gray-600 p-4">Content</li>
        <li className="border-b border-gray-600 p-4">Media</li>
        <li className="border-b border-gray-600 p-4">Mission</li>
      </ul>
    </div>
  );
}
