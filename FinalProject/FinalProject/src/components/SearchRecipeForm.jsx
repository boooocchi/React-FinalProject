import React from "react";
import { createSearchParams } from "react-router-dom";
import Button from "@/components/Button";
import { useNavigate } from "react-router";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const SearchRecipeForm = () => {
  const diets = [
    "pescetarian",
    "lacto vegetarian",
    "ovo vegetarian",
    "vegan",
    "paleo",
    "primal",
    "vegetarian"
  ];

  const dietsOptions = diets.map((diet, i) => {
    return (
      <option key={i} value={diet}>
        {diet}
      </option>
    );
  });

  const navigate = useNavigate();
  const searchInputRef = useRef();
  const includeInputRef = useRef();
  const excludeInputRef = useRef();
  const dietInputRef = useRef();

  const inputClass =
    "p-1 w-[15rem] rounded-md h-7  border border-slategray max-md:h-8 max-md:w-[80%]  mb-1";

  const searchInputHandler = (e) => {
    e.preventDefault();
    const params = createSearchParams({
      query: searchInputRef.current.value,
      includeIngredients: includeInputRef.current.value,
      excludeIngredients: excludeInputRef.current.value,
      diet: dietInputRef.current.value
    });
    navigate(`/searchresult/?${params}`);
    // setSearchParams({ query: searchInputRef.current.value });
  };
  return (
    <form className="w-full flex flex-col items-center text-blueblack mt-5 max-xs:mt-3 font-main max-[480px]:items-center">
      <label htmlFor="keyword" className="max-xs:text-[0.9rem]">
        Search Keyword:
      </label>
      <input
        ref={searchInputRef}
        id="keyword"
        name="keyword"
        type="text"
        className={inputClass}
      />
      <label htmlFor="include" className="max-xs:text-[0.9rem]">
        Include Ingredients:
      </label>
      <input
        id="include"
        name="include"
        ref={includeInputRef}
        type="text"
        className={inputClass}
      />
      <label htmlFor="exclude" className="max-xs:text-[0.9rem]">
        Exclude Ingredients:
      </label>
      <input
        id="exclude"
        name="exclude"
        ref={excludeInputRef}
        type="text"
        className={inputClass}
      />

      <label htmlFor="diet" className="max-xs:text-[0.9rem]">
        Choose a diet type:
      </label>
      <select
        id="diet"
        name="diet"
        className="w-[15rem] px-1 rounded-md  border border-slategray max-lg:h-8 max-md:w-[80%] leading-10"
        ref={dietInputRef}
      >
        <option value="" className="">
          ---
        </option>
        {dietsOptions}
      </select>

      <Button onClick={searchInputHandler} type="submit">
        Search
      </Button>
    </form>
  );
};

export default SearchRecipeForm;
