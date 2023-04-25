import React from "react";
import { BiRestaurant, BiLogOut, BiUserCircle } from "react-icons/Bi";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/slice/loginSlice";
import { useNavigate } from "react-router";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logOutHandler = () => {
    console.log("hi");
    dispatch(setUser(null));
    navigate("/login");
  };

  const backHomeHandler = () => {
    navigate("/");
  };
  return (
    <header className="fixed w-full opacity-90 z-10">
      <nav className="h-16 bg-accent w-full flex items-center justify-between px-9 max-xs:px-4 max-xs:h-10">
        <div
          className="flex items-center gap-1 hover:cursor-pointer"
          onClick={backHomeHandler}
        >
          <BiRestaurant
            color="rgb(49, 53, 57)"
            className="text-[1.7rem] max-xs:text-[1.4rem]
          ]"
          />
          <span className="font-title text-blueblack text-[1.1rem] max-xs:leading-[.9rem] max-xs:text-[0.8rem]">
            SMART RECIPE
          </span>
        </div>
        <ul className="flex items-center gap-2 max-xs:gap-[0.1rem]">
          <li className="flex items-center ">
            <BiUserCircle
              color="rgb(49, 53, 57)"
              className="text-[1.5rem] max-[480px]:text-[1.3rem]"
            />
          </li>
          <li className="flex items-center" onClick={logOutHandler}>
            <BiLogOut
              color="rgb(49, 53, 57)"
              className="text-[1.5rem] max-[480px]:text-[1.3rem]"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
