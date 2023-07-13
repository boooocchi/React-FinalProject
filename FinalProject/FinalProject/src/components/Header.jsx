import { useState, useRef, useEffect } from "react";
// import { BiRestaurant, BiLogOut, BiUserCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/slice/loginSlice";
import { useNavigate } from "react-router";
import { setData } from "@/store/slice/dataSlice";
import { Link } from "react-router-dom";
// import { MdMenuBook } from "react-icons/md";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faUser,
  faRightFromBracket,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userMenu, setUserMenu] = useState(false);
  const logOutHandler = () => {
    dispatch(setUser(null));
    dispatch(setData(null));
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
      <nav className="h-[4rem] bg-[rgba(95,102,110,0.5)] w-full flex items-center justify-between px-9 max-xs:px-4 max-xs:h-14">
        <div
          className="flex items-center gap-1 hover:cursor-pointer  text-white  hover:text-blueblack"
          onClick={backHomeHandler}
        >
          <FontAwesomeIcon
            icon={faUtensils}
            className="text-[1.6rem] max-xs:text-[1.6rem] mr-2 max-xs:mr-1"
          />
          {/* <BiRestaurant
            className="text-[1.7rem] max-xs:text-[1.6rem]
          ]"
          /> */}
          <span className="font-title  text-[1.1rem] max-xs:leading-[1rem] max-xs:text-[1.1rem]">
            SMART RECIPE
          </span>
        </div>
        <ul className="flex items-center gap-2 max-xs:gap-[0.1rem]">
          <li className="flex items-center relative " ref={wrapperRef}>
            <FontAwesomeIcon
              icon={faUser}
              className="text-[1.4rem] mr-4 hover:text-blueblack text-white hover:cursor-pointer max-xs:mr-3"
              onClick={userMenuHandler}
            />

            {userMenu && (
              <div
                ref={menuRef}
                className="text-blueblack lg:w-[300px] w-[250px] h-[300px] absolute shadow-lg bg-[rgba(250,250,250,0.7)] rounded-lg top-10 max-xs:top-10 max-xs:w-[200px] max-xs:right-[10%] right-[20%] before:content-[` `] before:block before:absolute  before:w-0 before:h-0 before:border-solid before:border-r-[10px] before:border-l-[10px] before:border-r-[transparent] before:border-l-[transparent] before:border-b-[10px] before:border-b-white before:top-[-10px] before:right-[3%] max-md:right-[25%]"
              >
                <ul className="px-2 py-6 font-main flex flex-col items-center">
                  <Link
                    to="/favorites"
                    className="flex items-center justify-center gap-2 hover:text-primary h-[2rem] border-b-[2px] pb-1 border-b-blueblack w-[70%]   hover:border-b-primary"
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="text-[1.2rem] leading-[1.5rem] mr-1"
                    />
                    Favorite Recipes
                  </Link>
                </ul>
              </div>
            )}
          </li>
          <li className="flex items-center" onClick={logOutHandler}>
            <FontAwesomeIcon
              icon={faRightFromBracket}
              className="text-[1.4rem] hover:text-blueblack text-white hover:cursor-pointer"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
