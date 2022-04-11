import { useState } from "react";
import { BiNews } from "react-icons/Bi";
import { GrClose } from "react-icons/gr";
import {GiHamburgerMenu} from "react-icons/gi"

import Link from "next/link";
import { icons } from "react-icons";GrClose

export default function Header() {
    const [open, setOpen] = useState(false);
    let Links = [
        { name: "HOME", link: "/" },
        { name: "Sources", link: "/newsSources" },
        { name: "My History", link: "/userHistory" },
        { name: "About", link: "/about" },
    ];
    return (
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex items-center justify-between bg-white  py-4 md:px-10 px-7">
                <div className="font-bold text-3xl cursor-pointer flex items-center font-[Poppins]text-gray-800">
                    <span className="text-2xl text-indigo-600 mr-1 pt-2">
                        <BiNews/>
                    </span>
                    News
                </div>

                <div
                    onClick={() => setOpen(!open)}
                    className="text-2xl absolute right-8 top-6 cursor-pointer md:hidden"
                >
               
                    {open ? <GrClose/> : <GiHamburgerMenu/> }
                </div>

                <ul
                    className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-300 ease-in ${open ? "top-20 " : "top-[-490px]"
                        }`}
                >
                    {Links.map((item) => (
                        <li key={item.name} className="md:ml-8 text-xl md:my-0 my-7  items-center">
                            <Link
                                className="text-gray-800 justify-center hover:text-gray-400 duration-300"
                                href={item.link}
                            >
                                <a>{item.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
