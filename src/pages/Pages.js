import React from "react";
import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import SearchIngredients from "../pages/SearchedIngredients";
import RecipeDetails from "./RecipeDetails";
import { AnimatePresence } from "framer-motion";
import Diet from "./Diet";

function Pages() {
  //because i add routing here and i dont like to have many pages in app comp (define multiple route comps to take me in diff location)

  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/ingredients" element={<SearchIngredients />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/detail/:id" element={<RecipeDetails />} />
        <Route path="/diet/:type" element={<Diet />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Pages;
