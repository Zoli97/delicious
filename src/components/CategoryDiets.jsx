import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import veggie from "../assets/anna-pelzer-veggie.jpg";
import keto from "../assets/brooke-lark-keto.jpg";
import vegan from "../assets/hermes-rivera-vegan.jpg";
import glutenFree from "../assets/shashi-chaturvedula-glutenFree.jpg";
import { NavLink } from "react-router-dom";
import "../design/CategoryDiets.css";

function CategoryDiets() {
  return (
    <Main>
      <h3> Main Diets</h3>
      <MyGrid className="container">
        <ListDietsGrid className="list-diets-grid">
          <NavLink to={"/diet/Vegetarian"}>
            <Card id="Vegetarian" className="stacked">
              <img src={veggie} className="dietImages card__img" alt="" />

              {/* <h4>Vegetarian</h4> */}
            </Card>
          </NavLink>
          <NavLink to={"/diet/Ketogenic"}>
            <Card id="Ketogenic">
              <img src={keto} className="dietImages card__img" alt="" />

              {/* <h4>Ketogenic</h4> */}
            </Card>
          </NavLink>

          <NavLink to={"/diet/Vegan"}>
            <Card id="Vegan">
              <img src={vegan} className="dietImages card__img" alt="" />

              {/* <h4>Vegan</h4> */}
            </Card>
          </NavLink>

          <NavLink to={"/diet/GlutenFree"}>
            <Card id="GlutenFree">
              <img src={glutenFree} className="dietImages card__img" alt="" />

              {/* <h4>Gluten Free</h4> */}
            </Card>
          </NavLink>
        </ListDietsGrid>
      </MyGrid>
    </Main>
  );
}

const MyGrid = styled(motion.div)`
  max-width: 100rem;
  margin-inline: auto;
  padding-inline: 2rem;
`;

const ListDietsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  aspect-ratio: 1 / 1.5;
  cursor: pointer;
  img {
    border-radius: 2.5rem;
  }

  /** dynamic grow and shrink the height it wontbe 100% it'd be whatever the width is*/
  .card__img {
    width: 100%;
    aspect-ratio: 1 /1.25;
    object-fit: cover;
  }

  a {
    text-decoration: none;
  }

  h4 {
    color: white;
  }
`;
const Main = styled.main`
  padding: 1.5rem;

  h3 {
    color: white;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export default CategoryDiets;
