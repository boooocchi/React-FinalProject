import React from "react";
import Card from "@/components/Card";
import { motion } from "framer-motion";

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
      isMobile={props.isMobile}
    ></Card>
  ));

  return (
    <>
      <motion.h1
        initial={{ opacity: 0, top: "50%" }}
        whileInView={{
          opacity: 1,
          position: "relative",
          top: "0",
          transition: {
            type: "spring",
            duration: 0.5
          }
        }}
        viewport={{ once: true, amount: 1 }}
        className="text-center mt-[4.5rem] font-title text-2xl max-xs:mt-[3rem]"
      >
        Random Pick for you
      </motion.h1>
      <section className="mt-[1rem] w-4/5 max-w-[1200px] mx-auto grid grid-cols-2 gap-y-2 gap-x-8 max-xs:grid-cols-1 max-xs:gap-y-7  max-md:gap-x-4 mb-[4rem] max-xs:mb-[5rem] max-xs:mt-[1rem]">
        {randomMenus}
      </section>
    </>
  );
};

export default RandomMenu;
