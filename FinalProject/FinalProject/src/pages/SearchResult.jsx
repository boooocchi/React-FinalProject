// import { useParams } from "react-router";
import React from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import { config2 } from "../config";
import { useEffect, useState, useCallback } from "react";
import Card from "@/components/Card";
import SearchRecipeForm from "@/components/SearchRecipeForm";

const SearchResult = () => {
  // const params = useParams();
  const [searchParams] = useSearchParams();
  const key = config2.recipeAPIkey;
  const [searchedResults, setSearchedResults] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const query = searchParams.get("query");
  const includeIngredients = searchParams.get("includeIngredients");
  const excludeIngredients = searchParams.get("excludeIngredients");
  const diet = searchParams.get("diet");

  const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${query}&diet=${diet}&includeIngredients=${includeIngredients}&excludeIngredients=${excludeIngredients}&instructionsRequired=true&addRecipeInformation=true&ignorePantry=true&sort=calories&sortDirection=asc&offset=0&number=10&limitLicense=false&ranking=2'`;
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": key,
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
    }
  };
  const fetchSearchedRecipe = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      const response = await fetch(url, options);
      const result = await response.json();

      if (result.results.length === 0) {
        throw new Error(`No Recipe`);
      }
      setSearchedResults(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [query]);

  useEffect(() => {
    fetchSearchedRecipe();
  }, [query]);

  const recipes = searchedResults.results ? (
    searchedResults.results.map((result) => (
      <Card
        key={result.id}
        title={result.title}
        img={result.image}
        vegan={result.vegan}
        vegetarian={result.vegetarian}
        glutenFree={result.glutenFree}
        id={result.id}
        instruction={result.analyzedInstructions}

        // id={result}
      ></Card>
    ))
  ) : (
    <div className="h-screen flex flex-col items-center justify-center">
      <p className="text-[2.5rem] text-blueblack">
        {error} Try Again with other keywords
      </p>
      <SearchRecipeForm></SearchRecipeForm>
    </div>
  );

  let sectionClassName = "";
  if (!isLoading && !error) {
    sectionClassName =
      "pt-[5rem] w-4/5 max-w-[1200px] mx-auto grid grid-cols-2 gap-y-2 gap-x-8 max-xs:grid-cols-1 max-xs:gap-y-5 max-xs:pt-[3rem]";
  }

  // const query = new URLSearchParams(search);
  // const searchParams = params.searchParams;
  return (
    <>
      <Header></Header>
      <section className={sectionClassName}>
        {!isLoading ? (
          recipes
        ) : (
          <div
            role="status"
            className="flex items-center justify-center w-full h-screen"
          >
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
      </section>
    </>
  );
};

export default SearchResult;
