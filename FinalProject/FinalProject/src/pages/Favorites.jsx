import Header from "@/components/Header";
import { useSelector } from "react-redux";
import Card from "@/components/Card";
import Footer from "@/components/Footer";

const Favorites = () => {
  const favoriteLists = useSelector((state) => {
    return state.favorites.favoritesId;
  });
  const cards = favoriteLists.map((menu) => {
    return (
      <Card
        key={menu.id}
        img={menu.img}
        title={menu.title}
        vegetarian={menu.vegetarian}
        vegan={menu.vegan}
        glutenFree={menu.glutenFree}
        id={menu.id}
        instruction={menu.analyzedInstructions}
      ></Card>
    );
  });

  return (
    <>
      <Header></Header>
      <h1 className="font-title text-2xl text-center pt-[7rem]">
        Favorite Recipes
      </h1>
      {cards.length === 0 && (
        <div className="text-center font-m  ain mt-10 text-[1.1rem] ">
          You haven't added anything to favorite list yet!!
        </div>
      )}
      <section className="pt-[1rem] w-4/5 max-w-[1200px] mx-auto grid grid-cols-2 gap-y-3 gap-x-8 max-xs:grid-cols-1 max-xs:gap-y-8 max-xs:pt-[1rem] max-md:gap-x-4 mb-[4rem] ">
        {cards}
      </section>
      <Footer></Footer>
    </>
  );
};

export default Favorites;
