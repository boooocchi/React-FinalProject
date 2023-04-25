import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

//components
import Header from "@/components/Header";
import SearchRecipeForm from "@/components/SearchRecipeForm";
import RandomMenu from "@/components/RandomMenu";

//key
import { config2 } from "../config";

//redux
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../store/slice/dataSlice";

//picture
import homeBackgroundPic from "@/assets/homeBackground.jpg";
import homeBackgroundPic2 from "@/assets/homeBackground2.jpg";

//router
import { useNavigate } from "react-router";

const Home = () => {
  const datas = useSelector((state) => {
    return state.datas.data;
  });
  const dispatch = useDispatch();

  // responsive
  const isTablet = useMediaQuery({ query: "(max-width: 767px)" });
  const isMobile = useMediaQuery({ query: "{max-width:480px" });

  const key = config2.recipeAPIkey;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": key,
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
    }
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
    fetchRandomData();
  }, []);

  return (
    <>
      <Header></Header>

      <div className="md:aspect-[16/9] w-full max-w-[1600px] mx-auto relative overflow-hidden  before:block before:absolute before:w-full before:h-full before:backdrop-blur-[3px] max-md:aspect-[4.5/5] min-h-[450px]">
        <img
          src={isTablet ? homeBackgroundPic2 : homeBackgroundPic}
          alt="Homepage background picture"
          className="object-cover min-h-[450px]"
        />
        <div className="absolute w-4/5 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center mt-5 ">
          <h1 className="font-title text-blueblack text-[5rem] max-lg:text-[3.5rem] text-center max-lg:-mb-5 lg:-mb-6 max-md:[3.5rem]  max-xs:leading-[2.5rem] max-xs:text-[2.5rem]">
            <span>SMART{isMobile && <br />} RECIPE</span>
          </h1>
          <SearchRecipeForm />
        </div>
      </div>
      {datas ? <RandomMenu datas={datas} /> : <div>Loading...</div>}
    </>
  );
};

export default Home;
