import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Dashboard from "./Components/Dashboard";
import UserProfile from "./Components/UserProfile";
import NotFound from "./Pages/NotFound";
// import ProtectedRoute from "./Components/ProtectedRoute";
import Login from "./Components/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />

      {/* Protected Route */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Dynamic Route with useParams */}
      <Route path="/user/:id" element={<UserProfile />} />

      {/* 404 page  */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
