import React from "react";
import Card from "@/components/Card";

const RandomMenu = (props) => {
  console.log(props.data);

  const randomMenus = props.datas.recipes.map((menu) => (
    <>
      <Card
        img={menu.image}
        title={menu.title}
        vegetarian={menu.vegetarian}
        vegan={menu.vegan}
        glutenFree={menu.glutenFree}
        id={menu.id}
      ></Card>
      {/* <div className="overflow-hidden rounded-md">
        <img
          className="object-cover scale-125"
          src={menu.image}
          alt="menu image"
        />
      </div> */}
    </>
  ));

  return (
    <section className="pt-[5rem] w-4/5 max-w-[1200px] mx-auto grid grid-cols-2 gap-y-2 gap-x-8 max-xs:grid-cols-1 max-xs:gap-y-5 max-xs:pt-[3rem] max-md:gap-x-4">
      {randomMenus}
    </section>
  );
};

export default RandomMenu;
