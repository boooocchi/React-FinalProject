import React from "react";
import Header from "@/components/Header";
import Button from "@/components/Button";
import { config2 } from "../config";
import { useEffect, useCallback, useRef, useState } from "react";
import RandomMenu from "@/components/RandomMenu";
import { useDispatch, useSelector } from "react-redux";

import homeBackgroundPic from "@/assets/homeBackground.jpg";
import { setData } from "../store/slice/dataSlice";
import { useNavigate } from "react-router";
import { setUser } from "@/store/slice/loginSlice";
import { createSearchParams } from "react-router-dom";

const Home = () => {
  // const [searchInputValue, setSearchInputValue] = useState();
  const searchInputRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logOutHandler = () => {
    console.log("hi");
    dispatch(setUser(null));
    navigate("/login");
  };
  const datas = useSelector((state) => {
    return state.datas.data;
  });
  const key = config2.recipeAPIkey;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": key,
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
    }
  };

  const searchInputHandler = (e) => {
    e.preventDefault();
    const params = createSearchParams({
      query: searchInputRef.current.value
    });
    navigate(`/searchresult/?${params}`);
    // setSearchParams({ query: searchInputRef.current.value });
  };

  const fetchRandomData = async () => {
    const result = await fetch(
      "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=6",
      options
    );
    const data = await result.json();
    console.log(data);
    dispatch(setData(data));
    console.log(datas);
  };

  useEffect(() => {
    // fetchRandomData();
  }, []);

  return (
    <>
      <Header logOutHandler={logOutHandler}></Header>

      <div className="aspect-[16/9] w-full max-w-[1600px] mx-auto relative overflow-hidden  before:block before:absolute before:w-full before:h-full before:backdrop-blur-[3px]">
        {/* <div className="backdrop-blur-sm absolute h-screen w-full "> */}
        <img
          src={homeBackgroundPic}
          alt="Homepage background picture"
          className="object-cover"
        />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center  ">
          <h1 className="font-title text-blueblack text-[6rem] text-center leading-[6rem] ">
            SMART <br />
            RECIPE
          </h1>
          <div>
            <input
              ref={searchInputRef}
              type="text"
              className="border border-blueblack p-1 w-[15rem] rounded-md"
            />
            <Button onClick={searchInputHandler} type="submit">
              search
            </Button>
          </div>
        </div>
      </div>
      {/* {datas ? <RandomMenu datas={datas} /> : <div>Loading...</div>} */}
    </>
  );
};

export default Home;
