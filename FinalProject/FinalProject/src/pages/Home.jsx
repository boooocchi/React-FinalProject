import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

//components
import Header from "@/components/Header";
import SearchRecipeForm from "@/components/SearchRecipeForm";
import RandomMenu from "@/components/RandomMenu";
import Footer from "@/components/Footer";

//key
import { config2 } from "../config";

//redux
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../store/slice/dataSlice";

//picture
import homeBackgroundPic from "@/assets/HomepageBackground.jpg";
import homeBackgroundPic2 from "@/assets/HomepageBackground2.jpg";

//hooks
import useFavorite from "../hooks/useFavorite";

//animation
import { motion } from "framer-motion";

const Home = () => {
  const { tableHandler } = useFavorite();
  const datas = useSelector((state) => {
    return state.datas.data;
  });
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  // responsive
  const isTablet = useMediaQuery({ query: "(max-width: 767px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

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
    dispatch(setData(data));
  };

  const handleImageLoad = (event) => {
    event.target.classList.add("loaded");
    setIsLoading(false);
  };
  //animation variavle

  useEffect(() => {
    tableHandler();
    if (!datas) {
      fetchRandomData();
    }
    // tableHandler();
  }, []);

  return (
    <div>
      <Header></Header>
      {!isLoading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 1.5 }
          }}
          className="md:aspect-[16/9] w-full max-w-[1600px] mx-auto relative overflow-hidden  before:block before:absolute before:w-full before:h-full before:backdrop-blur-[3px] max-md:aspect-[3.5/5] max-xs:aspect-[3/5]  "
        >
          <img
            src={isTablet ? homeBackgroundPic2 : homeBackgroundPic}
            alt="Homepage background picture"
            className="absolute top-0 left-0  max-xs:aspect-[3/5]  w-full h-full object-cover blur"
            onLoad={handleImageLoad}
          />

          <div className="absolute w-4/5 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center mt-3 ">
            <motion.h1 className="font-title text-blueblack text-[5rem] max-lg:text-[3.5rem] text-center max-lg:-mb-5 lg:-mb-6 max-md:[3.5rem]  max-xs:leading-[2.5rem] max-xs:text-[2.7rem] max-xs:mb-6">
              <motion.span
                initial={{ top: "60%", opacity: 0 }}
                animate={{
                  top: "0",
                  position: "relative",
                  opacity: 1,

                  transition: {
                    duration: 0.3,
                    type: "spring",
                    damping: 25,
                    delay: 1.5
                  }
                }}
              >
                SMART RECIPE
              </motion.span>
            </motion.h1>
            <SearchRecipeForm />
          </div>
        </motion.div>
      ) : (
        <img
          src={isTablet ? homeBackgroundPic2 : homeBackgroundPic}
          alt="Homepage background picture"
          className="object-cover min-h-[450px] opacity-0"
          onLoad={handleImageLoad}
        />
      )}

      <Footer></Footer>
    </div>
  );
};

export default Home;
