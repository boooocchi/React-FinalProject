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
      {datas ? (
        <RandomMenu datas={datas} />
      ) : (
        <div role="status" className="flex items-center justify-center w-full">
          <svg
            aria-hidden="true"
            className="w-[5rem] h-[5rem] mr-2 text-[gray] animate-spin dark:text-[gray] fill-primary"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </>
  );
};

export default Home;
