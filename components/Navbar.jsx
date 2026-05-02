"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function () {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between max-w-7xl mx-auto w-full px-6 py-12">
        <Image src="/images/logo.svg" width={65} height={40} alt="Logo" />
        <Image
          className="block md:hidden cursor-pointer"
          src="/images/icon-menu.svg"
          width={25}
          height={30}
          alt="hamburger menu"
          onClick={() => setIsOpen(true)}
        />
        <ul className="hidden md:flex gap-8 text-dark-grayish-blue font-medium">
          <li className="cursor-pointer hover:text-soft-red transition-colors duration-300">
            Home
          </li>
          <li className="cursor-pointer hover:text-soft-red transition-colors duration-300">
            New
          </li>
          <li className="cursor-pointer hover:text-soft-red transition-colors duration-300">
            Popular
          </li>
          <li className="cursor-pointer hover:text-soft-red transition-colors duration-300">
            Trending
          </li>
          <li className="cursor-pointer hover:text-soft-red transition-colors duration-300">
            Categories
          </li>
        </ul>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="fixed bg-off-white w-[70%] right-0 top-0 bottom-0 p-6 md:hidden z-50"
              initial={{ x: "100%" }}
              animate={{x:0}}
              exit={{x:"100%"}}
              transition={{type:"tween", duration:0.3}}
            >
              <motion.div className="flex justify-end mb-12">
                <Image
                  className="block md:hidden cursor-pointer"
                  src="/images/icon-menu-close.svg"
                  width={32}
                  height={32}
                  alt="hamburger menu"
                  onClick={() => setIsOpen(false)}
                />
              </motion.div>
              <ul className="flex flex-col gap-6 text-very-dark-blue text-xl font-medium">
                <li className="cursor-pointer hover:text-soft-red transition-colors duration-300">
                  Home
                </li>
                <li className="cursor-pointer hover:text-soft-red transition-colors duration-300">
                  New
                </li>
                <li className="cursor-pointer hover:text-soft-red transition-colors duration-300">
                  Popular
                </li>
                <li className="cursor-pointer hover:text-soft-red transition-colors duration-300">
                  Trending
                </li>
                <li className="cursor-pointer hover:text-soft-red transition-colors duration-300">
                  Categories
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
