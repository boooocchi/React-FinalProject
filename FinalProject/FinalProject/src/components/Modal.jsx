import React from "react";
import { motion } from "framer-motion";
const Backdrop = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="fixed h-screen w-[100%]  bg-[rgba(0,0,0,0.4)] z-40 top-0 left-0 "
    ></div>
  );
};
const ModalWindow = (props) => {
  const x = props.position.cardLeft;
  const y = props.position.cardTop;

  const w = props.size.width / 2;
  const h = props.size.height / 2;
  return (
    <motion.div
      initial={{
        left: x,
        top: y,
        opacity: 0,
        transform: `translate(-${w}px,-${h}px) scale(0.1)`
      }}
      animate={{
        position: "fixed",
        top: "50%",
        left: "50%",
        opacity: 1,
        transform: "translate(-50%, -50%)",

        transition: { duration: 0.3 }
      }}
      className="fixed w-[70%] px-10 py-10 z-50 bg-[rgba(255,255,255,0.95)] h-[500px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md overflow-scroll font-main max-w-[1000px]"
    >
      {props.children}
    </motion.div>
  );
};

const Modal = (props) => {
  let ingredientsList;
  let ingredients;
  let instructions;

  if (props.instruction[0]) {
    ingredientsList = props.instruction[0].steps.map((instruction) => {
      const ingredients = instruction.ingredients.map((ingredient) => {
        return ingredient.name;
      });
      return ingredients;
    });

    const ingredientsArr = ingredientsList.reduce((array, ingredient) => {
      ingredient.forEach((ing) => {
        array.push("◉" + ing);
      });

      return array;
    }, []);
    const set = new Set(ingredientsArr);
    const ingredientsArr2 = [...set];

    ingredients = ingredientsArr2.map((ingredient, i) => [
      <div className="" key={i}>
        {ingredient}
      </div>
    ]);

    instructions = props.instruction[0].steps.map((instruction, i) => {
      return (
        <div className="mb-3" key={i}>
          {i + 1}: &nbsp;{instruction.step}
        </div>
      );
    });
  }

  return (
    <>
      <ModalWindow position={props.position} size={props.size}>
        {props.instruction[0] ? (
          <>
            <h2 className="text-[1.2rem] mb-1 font-title">Ingredients</h2>
            <div
              className=" h-[250px] flex flex-col flex-wrap mb-4 gap-[10px] max-xs:h-[200px]
            "
            >
              {ingredients}
            </div>
            <h2 className="text-[1.2rem] mb-1 font-title">Instruction</h2>
            <div>{instructions}</div>
          </>
        ) : (
          <div className="text-[2rem]  mt-5 ml-5">No recipe</div>
        )}
      </ModalWindow>
      <Backdrop onClick={props.closeModalHandler}></Backdrop>
    </>
  );
};

export default Modal;
