"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [drop, setDrop] = useState(false);
  const changeState = () => {
    setDrop(!drop);
  };
  return (
    <>
    {/* Mobile Navbar  */}
      <div className="sm:hidden">
        <nav className="px-5 py-2 flex justify-between items-center">
          <div className="logo">
            <h1 className="text-3xl sm:text-2xl font-bold">FinePay</h1>
          </div>
          <div className="menu ">
            <button 
              onClick={changeState}
              className="hover:bg-gray-400/20 p-2 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
            {drop && (
              <div className="dropdown w-full absolute top-16 left-0  bg-white shadow-lg rounded-lg mt-2 border border-gray-200 z-50">
                <div className="list p-4">
                  <ul className="flex flex-col gap-4 text-gray-800">
                    <li>
                      <a href="" className="block hover:text-blue-600 transition-colors">Products</a>
                    </li>
                    <li>
                      <a href="" className="block hover:text-blue-600 transition-colors">Customers</a>
                    </li>
                    <li>
                      <a href="" className="block hover:text-blue-600 transition-colors">Pricing</a>
                    </li>
                    <li>
                      <a href="" className="block hover:text-blue-600 transition-colors">Learn</a>
                    </li>
                  </ul>
                </div>
                <div className="p-4 border-t border-gray-200">
                  <button className="w-full mb-2 bg-white text-black border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
                    Sign in
                  </button>
                  <button className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
                    Login
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
      {/* Laptop  Navbar  */}
      <div className=" hidden sm:block">
        <nav className=" px-5 py-2 flex justify-between items-center">
          <div className="flex gap-10 justify-center items-center">
            <div className="logo">
              <h1 className="text-3xl sm:text-2xl font-bold ">FinePay</h1>
            </div>
            <div className="list px-5">
              <ul className="flex px-10 py-5 gap-3 text-black text-md font-thin">
                <li>
                  <a href="">Products</a>
                </li>
                <li>
                  <a href="">Customers</a>
                </li>
                <li>
                  <a href="">Pricing</a>
                </li>
                <li>
                  <a href="">Learn</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="btn flex gap-5">
            <div>
              <button className="bg-white text-black px-5 py-2 rounded-md">
                Sign in
              </button>
            </div>
            <div>
              <button className="bg-black text-white px-5 py-2 rounded-md">
                Login
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
