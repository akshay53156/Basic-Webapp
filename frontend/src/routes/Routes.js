import { Routes, Route } from "react-router-dom";
import Login from "../components/pages/Login";
import Registration from "../components/pages/Registration";
import Dashboard from "../components/pages/Dashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};

export default AppRoutes;
