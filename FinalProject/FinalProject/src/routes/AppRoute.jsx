import { useState, useEffect } from "react";

//router related
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";

//pages
import { Home, Login, SearchResult } from "@/pages";

//redux

// const PrivateRoute = ({ user }) => {
//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }
//   return <Outlet />;
// };
// const user = useSelector((state) => state.user.user);

function App() {
  // useEffect(() => {
  //   console.log("hi");
  // });
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<PrivateRoute user={user} />}> */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/result" element */}
        {/* </Route> */}
        <Route path="/login" element={<Login />} />
        <Route path="/searchresult/*" element={<SearchResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
