import React from "react";

const RandomMenu = (props) => {
  console.log(props.data);

  const randomMenus = props.datas.recipes.map((menu) => (
    <div className="overflow-hidden rounded-md">
      <img
        className="object-cover scale-125"
        src={menu.image}
        alt="menu image"
      />
    </div>
  ));

  return (
    <section className="w-9/12 mx-auto max-w-screen-xl my-[5rem] ">
      <div className="grid grid-cols-3 gap-10">{randomMenus}</div>
    </section>
  );
};

export default RandomMenu;
