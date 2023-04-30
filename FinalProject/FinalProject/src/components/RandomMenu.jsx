import React from "react";
import Card from "@/components/Card";

const RandomMenu = (props) => {
  const randomMenus = props.datas.recipes.map((menu) => (
    <Card
      key={menu.id}
      img={menu.image}
      title={menu.title}
      vegetarian={menu.vegetarian}
      vegan={menu.vegan}
      glutenFree={menu.glutenFree}
      id={menu.id}
      instruction={menu.analyzedInstructions}
    ></Card>
  ));

  return (
    <>
      <h1 className="text-center mt-[5rem] font-title text-2xl max-xs:mt-[3rem]">
        Random Pick for you
      </h1>
      <section className="mt-[2rem] w-4/5 max-w-[1200px] mx-auto grid grid-cols-2 gap-y-2 gap-x-8 max-xs:grid-cols-1 max-xs:gap-y-2  max-md:gap-x-4 mb-[5rem] max-xs:mb-[3rem] max-xs:mt-[1rem] ">
        {randomMenus}
      </section>
    </>
  );
};

export default RandomMenu;
