//router related
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";

//pages
import { Home, Login, SearchResult, Favorites, Register } from "@/pages";

//redux
import { useSelector } from "react-redux";

const PrivateRoute = ({ user }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};
function AppRoute() {
  const user = useSelector((state) => state.login.user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute user={user} />}>
          <Route path="/" element={<Home />} />
          <Route path="/searchresult/*" element={<SearchResult />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
