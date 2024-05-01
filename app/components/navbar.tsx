"use client";
import React, { useState } from "react";
import { navbarButtonNames } from "../constants";
import { MenuScale, WebWindowXmark } from "iconoir-react";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  return (
    <div className="flex justify-between items-center w-full h-24 text-amber-900 px-6 py-20">
      <button className="font-bold text-[32px] hover:text-amber-700">Collers</button>
      {/* For Web View */}
      <div className="hidden md:flex gap-4 font-medium text-[16px]">
        {navbarButtonNames.map((name) => (
          <button
            key={name}
            className={`hover:text-amber-700  ${
              name == "Sign up now" ? "border-2 border-amber-900 rounded-lg p-3 hover:border-amber-700" : ""
            }`}
          >
            {name}
          </button>
        ))}
      </div>
      {/* For Mobile View */}
      <div className="flex md:hidden">
        {isNavbarOpen ? (
          <WebWindowXmark height={24} width={24} onClick={() => setIsNavbarOpen(!isNavbarOpen)} />
        ) : (
          <MenuScale
            className="-scale-x-100"
            height={24}
            width={24}
            onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          />
        )}
        {isNavbarOpen && (
          <div className="absolute top-24 left-0 w-full h-96 bg-amber-50 flex flex-col items-center justify-center gap-4">
            {navbarButtonNames.map((name) => (
              <button
                key={name}
                className={`hover:text-amber-700  ${
                  name == "Sign up now"
                    ? "border-2 border-amber-900 rounded-lg p-3 hover:border-amber-700"
                    : ""
                }`}
              >
                {name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
