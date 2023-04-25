import React, { useEffect } from "react";
import { FaCarrot, FaLeaf } from "react-icons/Fa";
import { GiFlour } from "react-icons/Gi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/Ai";
import { useDispatch, useSelector } from "react-redux";
import { setFavoriteId, removeFavoriteId } from "../store/slice/favoriteSlice";

const Card = (props) => {
  let gluten = <GiFlour color="rgb(133,141,149)"></GiFlour>;
  let vegetarian = <FaCarrot color="rgb(133, 141, 149)"></FaCarrot>;
  let vegan = <FaLeaf color="rgb(133, 141, 149)"></FaLeaf>;

  useEffect(() => {
    console.log(favoriteLists);
  });

  const favoriteLists = useSelector((state) => {
    return state.favorites.favoritesId;
  });
  const dispatch = useDispatch();

  const favoriteHandler = (e, id) => {
    e.preventDefault();

    dispatch(setFavoriteId(String(id)));

    // console.log(e.target.id);
  };

  const removeFavoriteHandler = (e, id) => {
    e.preventDefault();
    const stringId = String(id);
    dispatch(removeFavoriteId(stringId));
  };

  const heart = !favoriteLists.includes(String(props.id)) ? (
    <AiOutlineHeart
      id={props.id}
      color="red"
      onClick={() => favoriteHandler(event, props.id)}
    />
  ) : (
    <AiFillHeart
      id={props.id}
      color="red"
      onClick={() => removeFavoriteHandler(event, props.id)}
    />
  );

  if (props.glurenFree) {
    gluten = <GiFlour color="rgb(26, 172, 94)"></GiFlour>;
  }
  if (props.vegetarian) {
    vegetarian = <FaCarrot color="rgb(26, 172, 94)"></FaCarrot>;
  }
  if (props.vegan) {
    vegan = <FaLeaf color="rgb(26, 172, 94)"></FaLeaf>;
  }
  return (
    <a
      href="#"
      className="w-full  flex flex-col items-center bg-white border border-[#8080809b] rounded-md  md:flex-row  dark:border-gray-700 dark:bg-[gray-800] dark:hover:bg-[#cbcaca44] my-5 mx-auto overflow-hidden md:aspect-[3.5/2] xl:aspect-[2/1] hover:shadow-md hover:shadow-[#0000004d] hover:-translate-y-1 max-w-[550px] max-xs:h-full"
    >
      <div className="w-[60%] overflow-hidden md:aspect-square max-md:w-full max-md:h-[14rem]">
        <img
          className="object-cover h-full max-md:w-full max-md:scale-[1.2]"
          src={props.img}
          alt=""
        />
      </div>
      <div className="w-[40%] flex flex-col justify-between p-5 max-lg:px-3 max-lg:py-4 max-md:h-[50%] leading-normal max-md:w-[95%] max-md:">
        <span>{heart}</span>
        <h5 className=" text-blueblack mb-3 lg:text-[1.2rem] font-bold tracking-tight dark:text-white max-lg:text-[0.9rem] max-md:[1rem]  max-lg:leading-[1.4rem]">
          {props.title}
        </h5>
        <div className="flex justify-end gap-2">
          {gluten}
          {vegetarian}
          {vegan}
        </div>
      </div>
    </a>

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
