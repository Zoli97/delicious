import React from "react";
import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import Dessert from "../components/Dessert";
import { motion } from "framer-motion";
import CategoryDiets from "../components/CategoryDiets";
import MealData from "../components/MealData";
import WinePairing from "../components/WinePairing";

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{ padding: "2em" }}
    >
      <Veggie />

      <Popular />
      <hr />
      <CategoryDiets />
      <hr />
      <Dessert />

      <WinePairing />
      <h4 style={{ marginTop: "2em", marginBottom: "2em", color: "white" }}>
        Meal Plan
      </h4>
      <MealData />
    </motion.div>
  );
};

export default Home;
