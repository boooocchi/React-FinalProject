import React, { useState, useRef } from "react";
import { FaCarrot, FaLeaf } from "react-icons/fa";
import { GiFlour } from "react-icons/gi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  setFavoriteId,
  removeFavoriteId,
  addFavoriteId
} from "../store/slice/favoriteSlice";
import useFavorite from "../hooks/useFavorite";
import { supabase } from "@/lib/supabaseClient";
import Modal from "@/components/Modal";

const Card = (props) => {
  // const cardRef = useRef(null);
  let gluten = <GiFlour color="rgb(133,141,149)"></GiFlour>;
  let vegetarian = <FaCarrot color="rgb(133, 141, 149)"></FaCarrot>;
  let vegan = <FaLeaf color="rgb(133, 141, 149)"></FaLeaf>;
  const cardRef = useRef();
  const [cardPosition, setCardPosition] = useState({
    cardLeft: null,
    cardTop: null
  });
  const [cardSize, setCardSize] = useState({
    width: null,
    height: null
  });

  const [modal, setModal] = useState(false);

  const favoriteLists = useSelector((state) => {
    return state.favorites.favoritesId;
  });

  const userEmail = useSelector((state) => {
    return state.login.user.email;
  });
  const dispatch = useDispatch();

  const insertData = async (data) => {
    const { error } = await supabase
      .from("Smart Recipe")
      .insert([
        {
          email: userEmail,
          ...data
        }
      ])
      .select();
  };

  const deleteData = async (thisID) => {
    const { error } = await supabase
      .from("Smart Recipe")
      .delete()
      .match({ id: thisID });
  };
  const favoriteHandler = (
    e,
    id,
    title,
    img,
    glutenFree,
    vegetarian,
    vegan,
    analyzedInstructions
  ) => {
    e.preventDefault();
    e.stopPropagation();
    const recipeData = {
      id: id,
      title: title,
      img: img,
      glutenFree: glutenFree,
      vegan: vegan,
      vegetarian: vegetarian,
      analyzedInstructions: analyzedInstructions
    };
    dispatch(addFavoriteId(recipeData));
    insertData(recipeData);
  };

  const removeFavoriteHandler = (e, id) => {
    e.stopPropagation();
    e.preventDefault();

    dispatch(removeFavoriteId(id));
    deleteData(id);
  };

  const added = favoriteLists.filter((menu) => {
    return menu.id === props.id;
  });

  let heart = (
    <AiOutlineHeart
      className="text-[1.3rem]"
      id={props.id}
      color="red"
      onClick={(event) =>
        favoriteHandler(
          event,
          props.id,
          props.title,
          props.img,
          props.glutenFree,
          props.vegetarian,
          props.vegan,
          props.instruction
        )
      }
    />
  );
  if (added.length > 0) {
    heart = (
      <AiFillHeart
        className="text-[1.3rem]"
        id={props.id}
        color="red"
        onClick={(event) => removeFavoriteHandler(event, props.id)}
      />
    );
  }

  if (props.glurenFree) {
    gluten = <GiFlour color="rgb(26, 172, 94)"></GiFlour>;
  }
  if (props.vegetarian) {
    vegetarian = <FaCarrot color="rgb(26, 172, 94)"></FaCarrot>;
  }
  if (props.vegan) {
    vegan = <FaLeaf color="rgb(26, 172, 94)"></FaLeaf>;
  }

  //modal handler
  const cardClickHandler = () => {
    // Get position of clicked card
    const cardRect = cardRef.current.getBoundingClientRect();
    setCardSize({
      width: cardRef.current.clientWidth,
      height: cardRef.current.clientHeight
    });
    setCardPosition({ cardLeft: cardRect.left, cardTop: cardRect.top });

    // Animate ModalWindow to card position

    setModal(true);
  };
  const closeModalHandler = () => {
    setModal(false);
  };
  return (
    <>
      {modal && (
        <Modal
          instruction={props.instruction}
          closeModalHandler={closeModalHandler}
          position={cardPosition}
          size={cardSize}
        ></Modal>
      )}
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, top: "25%" }}
        whileInView={{
          opacity: 1,
          position: "relative",
          top: "0",
          transition: {
            type: "spring",
            damping: 12,
            duration: 0.5
          }
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-full  flex flex-col items-center bg-white border border-[#8080809b] rounded-md  md:flex-row  dark:border-gray-700 dark:bg-[gray-800] dark:hover:bg-[#cbcaca44] my-5 mx-auto overflow-hidden md:aspect-[3.5/2] xl:aspect-[2/1] hover:shadow-md hover:shadow-[#0000004d] hover:-translate-y-1 max-w-[500px] max-xs:h-full hover:cursor-pointer"
        onClick={cardClickHandler}
      >
        <div className="w-[60%] overflow-hidden md:aspect-square max-md:w-full max-md:h-[14rem]">
          <img
            className="object-cover h-full max-md:w-full max-md:scale-[1.2]"
            src={props.img}
            alt=""
          />
        </div>
        <div className="md:h-[90%] w-[40%] flex flex-col justify-between p-5 max-lg:px-3 max-lg:py-4 max-md:h-[50%] leading-normal max-md:w-[95%] max-md:">
          <span>{heart}</span>
          <h5 className="text-blueblack mb-3 lg:text-[1.2rem] font-bold tracking-tight  max-lg:text-[0.9rem] max-md:[1rem]  max-lg:leading-[1.4rem]">
            {props.title.length > 30
              ? `${props.title.slice(0, 30)}...`
              : props.title}
          </h5>
          <div className="flex justify-end gap-2">
            {gluten}
            {vegetarian}
            {vegan}
          </div>
        </div>
      </motion.div>
    </>

    // <div>
    //   <div>
    //     <img src={props.img} alt="dish image" />
    //   </div>
    //   <div>
    //     <h1>{props.title}</h1>
    //     <div>
    //       {gluten}
    //       {vegetarian}
    //       {vegan}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Card;
