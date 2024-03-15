"use client";

import { motion } from "framer-motion";
import { MenuIcon, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  scrollToIds: string[]
}

export const Navbar = ({
  scrollToIds
}: NavbarProps) => {
  const [toggle, setToggle] = useState(false)

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setToggle(false);
  };

  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 fixed top-0 bg-opacity-10 bg-gray-300 backdrop-blur-sm border-1 border-white z-10">
      <div className="flex justify-start items-center">
        <img src="./F&BCHICO.webp" className="w-18 h-12 object-cover" />

      </div>
      <ul className="hidden md:flex justify-center items-center list-none flex-1">
        {['home', 'time&place', 'giftTable', 'confirmation'].map((item) => (
          <li
            key={`link-${item}`}

            className="mx-4 cursor-pointer flex flex-col hover:text-[#313bca]"
          >
            <div className="w-2 h-2 bg-transparent rounded-full mb-2 hover:bg-[#313bca]" />
            <a
              href={`#${item}`}
              className="text-[#6b7688] uppercase font-semibold transition duration-300 ease-in-out hover:text-[#313bca]"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="md:hidden flex justify-center items-center bg-[#B69F6B] w-[35px] h-[35px] rounded-full">

        <MenuIcon
          onClick={() => setToggle(true)}
          className="w-4 h-4 text-white m-2 cursor-pointer"
        />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="fixed top-0 right-0 z-20 p-6 w-80 h-screen flex justify-end flex-col bg-cover bg-white shadow-lg"
            style={{ backgroundImage: 'url("./bgWhite.png")' }}
          >

            <X
              onClick={() => setToggle(false)}
              className="w-9 h-9 text-[#B69F6B] ml-auto cursor-pointer"
            />
            <ul className="list-none flex flex-col justify-start items-start h-full w-full">
              {['home', 'time&place', 'giftTable', 'confirmation'].map((item) => (
                <li
                  key={item}
                  className="my-4"
                >
                  <a
                    href={`#${item}`}
                    onClick={() => handleScrollTo(item)}
                    className="text-[#6b7688] uppercase font-semibold transition duration-300 ease-in-out hover:text-[#B69F6B]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

          </motion.div>
        )}
      </div>
    </ nav>
  );
}