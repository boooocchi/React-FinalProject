import { useDispatch, useSelector } from "react-redux";
import { supabase } from "@/lib/supabaseClient";
import { setFavoriteId } from "../store/slice/favoriteSlice";

const useFavorite = () => {
  const dispatch = useDispatch();

  const userEmail = useSelector((state) => {
    return state.login.user.email;
  });

  const tableHandler = async () => {
    const { data } = await supabase
      .from("Smart Recipe")
      .select()
      .eq("email", userEmail);

    if (data.length > 0) {
      dispatch(setFavoriteId(data));
    } else {
      dispatch(setFavoriteId([]));
    }
  };

  return { tableHandler };
};

export default useFavorite;
