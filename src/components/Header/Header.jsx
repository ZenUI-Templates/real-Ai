import React, { useEffect, useState } from "react";
import {
  MdShoppingBasket,
  MdOutlineLogin,
  MdOutlineFastfood,
} from "react-icons/md";
import { VscSignIn } from "react-icons/vsc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaBars,
} from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


export default function Header({ children }) {

  const navigate = useNavigate();


  // for mobile view only
  const [isOpen, setIsOpen] = useState(false);
  const menuItem = [
    {
      path: "/",
      name: "Products",
      icon: <MdOutlineKeyboardArrowDown />,
    },
    {
      path: "/foods",
      name: "Create",
      icon: <MdOutlineKeyboardArrowDown />,
    },
    {
      path: "/about",
      name: "Enterprise",
      icon: null
    },
    {
      path: "/about",
      name: "Pricing",
      icon: null
    },
    {
      path: "/about",
      name: "Resources",
      icon: <MdOutlineKeyboardArrowDown />,
    },
  ];


  return (
    <>
      <header className="bg-white  sticky mt-2 mb-2 z-40">
        {/* desktop  */}
        <div className="hidden lg:flex justify-between items-center px-3 max-w-6xl mx-auto">
          <div className="w-[131px]">
            <img
              src="https://i.ibb.co/nsjDGt1/Frame-13.png"
              alt="logo"
              className="h-[34px] cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
          <div className="flex items-center">
            <ul className="flex space-x-7">
              <li
                className={`cursor-pointer flex items-center gap-2 py-3 hover:text-custom-orange transition duration-200 ease-in-out text-base  text-text-color2 border-b-[3px] border-b-transparent `}
              >
                <p>Products</p>
                <MdOutlineKeyboardArrowDown />
              </li>
              <li
                className={`cursor-pointer flex items-center gap-2 py-3 hover:text-custom-orange transition duration-200 ease-in-out text-base  text-text-color2 border-b-[3px] border-b-transparent`}
              >
                <p>Create</p>
                <MdOutlineKeyboardArrowDown />
              </li>
              <li
                className={`cursor-pointer py-3 hover:text-custom-orange transition duration-200 ease-in-out text-base  text-text-color2 border-b-[3px] border-b-transparent`}
              >
                Enterprise
              </li>
              <li
                className={`cursor-pointer py-3 hover:text-custom-orange transition duration-200 ease-in-out text-base  text-text-color2 border-b-[3px] border-b-transparent`}
              >
                Pricing
              </li>
              <li
                className={`cursor-pointer flex items-center gap-2 py-3 hover:text-custom-orange transition duration-200 ease-in-out text-base  text-text-color2 border-b-[3px] border-b-transparent`}
              >
                <p>Resources</p>
                <MdOutlineKeyboardArrowDown />
              </li>

              {/*  */}
            </ul>
          </div>

          <div className="flex gap-3">
            <div className="border border-text-color2 rounded-2xl px-4 py-1 text-text-color2">
              <p>Sign In</p>
            </div>
            <div className="rounded-2xl px-4 py-1 bg-custom-orange text-white">
              <p>Sign Up</p>
            </div>
          </div>
        </div>

        {/* for mobile and tablate*/}
        <div className="lg:hidden flex justify-between items-center px-5 max-w-6xl mx-auto">
          <img
            src="https://i.ibb.co/nsjDGt1/Frame-13.png"
            alt="logo"
            className="w-[131px] h-[34px] cursor-pointer mr-1"
            onClick={() => {
              navigate("/");
            }}
          />

          <FaBars
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-gray-500 cursor-pointer"
          />
        </div>

        {isOpen && (
          <div className="lg:hidden w-screen bg-text-color2 mt-5 text-white z-50">
            <ul className="text-center">
              {menuItem.map((item) => (
                <li
                  key={item.path}
                  className={`cursor-pointer py-3 font-semibold border-b hover:text-custom-orange transition duration-200 ease-in-out text-base `}
                >
                  <p className="w-auto flex items-center justify-center gap-1">
                    <p>{item.name}</p>
                    {item.icon && <p>{item.icon}</p> }
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
