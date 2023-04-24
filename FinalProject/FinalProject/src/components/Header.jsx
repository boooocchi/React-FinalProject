import React from "react";
import { BiRestaurant, BiLogOut, BiUserCircle } from "react-icons/Bi";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/slice/loginSlice";
import { useNavigate } from "react-router";

const Header = (props) => {
  return (
    <header className="fixed w-full opacity-90 z-10">
      <nav className="h-16 bg-accent w-full flex items-center justify-between px-9">
        <div className="flex items-center gap-1">
          <BiRestaurant color="rgb(49, 53, 57)" className="text-[1.7rem]" />
          <span className="font-title text-blueblack text-[1.1rem]">
            SMART RECIPE
          </span>
        </div>
        <ul className="flex items-center gap-2">
          <li className="flex items-center ">
            <BiUserCircle color="rgb(49, 53, 57)" className="text-[1.5rem]" />
          </li>
          <li className="flex items-center" onClick={props.logOutHandler}>
            <BiLogOut color="rgb(49, 53, 57)" className="text-[1.5rem]" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
