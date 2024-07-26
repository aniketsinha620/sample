
import { Route, Routes, useLocation, matchPath } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Login_admin from "./pages/Login_admin";

import Services from "./pages/service/Services";
import Services_inside from "./pages/service_inside/Service_inside";
import Register from "./pages/Register";
import Dashboard from "./components/UserDashboard/Dashboard";
import { useAuthContext } from "./components/context/AuthContext";
import Admin from "./pages/AdminDashboard/Admin";
import AdminAddUser from "./pages/AdminDashboard/AdminAddUser";


function App() {
  const { authUser, setAuthUser } = useAuthContext()
  const location = useLocation();
  const path = matchPath("/admin/profile/*", location.pathname)
  // console.log(path.pathname)
  console.log(path)


  return (
    <div className="appjs w-screen flex flex-col">
      <div className="w-screen flex flex-col">

        {!path && <Navbar />}



        <Routes>
          <Route path="/admin/profile/*" element={<Admin />} />
          <Route path="/admin/profile/registerAdminUser" element={<AdminAddUser />} />

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/admin/login" element={<Login_admin />} />
          <Route path="/register" element={<Register />} />


          <Route path="/services/inside" element={<Services_inside />} />
          <Route path="/services/outside" element={<Services />} />
          <Route path="/userDashboard/*" element={authUser ? <Dashboard /> : <Register />} />

        </Routes>



      </div>
    </div>
  );
}

export default App;
// 2041011155.shrutikumari@gmail.com