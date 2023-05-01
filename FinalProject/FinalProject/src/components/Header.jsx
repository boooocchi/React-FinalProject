import React, { useState, useRef, useEffect } from "react";
// import { BiRestaurant, BiLogOut, BiUserCircle } from "react-icons";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/slice/loginSlice";
import { useNavigate } from "react-router";
import { setData } from "@/store/slice/dataSlice";
import { Link } from "react-router-dom";
// import { MdMenuBook } from "react-icons/Md";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userMenu, setUserMenu] = useState(false);
  const logOutHandler = () => {
    dispatch(setUser(null));
    dispatch(setData(null));
    // navigate("/login");
  };

  const userMenuHandler = () => {
    setUserMenu(true);
    // navigate("/favorites");
  };
  const backHomeHandler = () => {
    navigate("/");
  };
  const wrapperRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setUserMenu(false);
      }
    }
    const listener = (event) => {
      if (wrapperRef.current && wrapperRef.current.contains(event.target)) {
        setUserMenu(true);
      }
    };

    // const hoverOutSide = (event) => {
    //   if (
    //     menuRef.current &&
    //     !menuRef.current.contains(event.target) &&
    //     !wrapperRef.current.contains(event.target)
    //   ) {
    //     setUserMenu(false);
    //   }
    // };

    document.addEventListener("mouseover", listener);
    document.addEventListener("mousedown", handleClickOutside);
    // document.addEventListener("mouseover", hoverOutSide);
    return () => {
      document.removeEventListener("mouseout", listener);
      document.removeEventListener("mousedown", handleClickOutside);
      // document.removeEventListener("mouseout", hoverOutSide);
    };
  }, [wrapperRef]);

  return (
    <header className="fixed w-full  z-10">
      <nav className="h-16 bg-accent w-full flex items-center justify-between px-9 max-xs:px-4 max-xs:h-10">
        <div
          className="flex items-center gap-1 hover:cursor-pointer  text-blueblack  hover:text-[white]"
          onClick={backHomeHandler}
        >
          {/* <BiRestaurant
            className="text-[1.7rem] max-xs:text-[1.4rem]
          ]"
          /> */}
          <span className="font-title  text-[1.1rem] max-xs:leading-[.9rem] max-xs:text-[0.8rem]">
            SMART RECIPE
          </span>
        </div>
        <ul className="flex items-center gap-2 max-xs:gap-[0.1rem]">
          <li className="flex items-center relative " ref={wrapperRef}>
            {/* <BiUserCircle
              className="text-[1.5rem] max-[480px]:text-[1.3rem] text-blueblack hover:text-white hover:cursor-pointer"
              onClick={userMenuHandler}
            /> */}
            {userMenu && (
              <div
                ref={menuRef}
                className="text-blueblack lg:w-[300px] w-[200px] h-[300px] absolute shadow-lg bg-white rounded-lg top-10 max-xs:top-7 max-xs:w-[170px] right-[-20%] before:content-[` `] before:block before:absolute  before:w-0 before:h-0 before:border-solid before:border-r-[10px] before:border-l-[10px] before:border-r-[transparent] before:border-l-[transparent] before:border-b-[10px] before:border-b-white before:top-[-10px] before:right-[3%] "
              >
                <ul className="px-2 py-5 font-main flex flex-col items-center">
                  <li className="border-b-[2px] pb-1 border-b-blueblack w-[70%] ">
                    <Link
                      to="/favorites"
                      className="flex items-center justify-center gap-2 hover:text-primary "
                    >
                      {/* <MdMenuBook className="text-[1.5rem]" /> Favorite Recipes */}
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="flex items-center" onClick={logOutHandler}>
            {/* <BiLogOut className="text-[1.5rem] max-[480px]:text-[1.3rem] text-blueblack hover:text-white hover:cursor-pointer" /> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
