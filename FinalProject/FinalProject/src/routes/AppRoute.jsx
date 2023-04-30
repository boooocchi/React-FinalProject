import { useState, useEffect } from "react";

//router related
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import { Home, Login, SearchResult, Favorites, Register } from "@/pages";

//redux

// const PrivateRoute = ({ user }) => {
//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }
//   return <Outlet />;
// };
// const user = useSelector((state) => state.user.user);

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/searchresult/*" element={<SearchResult />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
