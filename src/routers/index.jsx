import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { UserWrapper } from "../context/UserContext";
import Discussion from "../pages/Discussion";
import Education from "../pages/Education";
import Home from "../pages/Home";
import LandingPage from "../pages/LandingPage";
import Product from "../pages/Product";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Tour from "../pages/Tour";
import AuthRoute from "./AuthRoute";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Routers = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <UserWrapper>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<AuthRoute />}>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/education" element={<Education />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/discussion" element={<Discussion />} />
        </Routes>
      </UserWrapper>
    </BrowserRouter>
  );
};

export default Routers;
