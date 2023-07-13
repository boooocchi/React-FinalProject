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
    "px-3 py-2 w-full rounded-md  border border-slategray  mb-1 ";

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
    <form className="w-[70%] flex flex-col items-center text-blueblack mt-8 max-w-[500px] max-xs:mt-3 font-main max-[480px]:items-center gap-3 max-md:w-[100%]">
      <input
        ref={searchInputRef}
        id="keyword"
        name="keyword"
        type="text"
        className={inputClass}
        placeholder="Search Keyword"
      />

      <div className="flex gap-3 w-full">
        <input
          id="include"
          name="include"
          ref={includeInputRef}
          type="text"
          className={inputClass}
          placeholder="Include Ingredients"
        />
        <input
          id="exclude"
          name="exclude"
          ref={excludeInputRef}
          type="text"
          className={inputClass}
          placeholder="Exclude Ingredients"
        />
      </div>

      <select
        id="diet"
        name="diet"
        className=" px-2 py-2 mx-md:py-1 flex items-center rounded-md  border border-slategray w-full leading-10"
        ref={dietInputRef}
      >
        <option value="" className="">
          Choose a diet type:
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
