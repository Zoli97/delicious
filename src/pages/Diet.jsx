import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Diet() {
  const [my_diet, setDiet] = useState([]);

  let params = useParams();

  // const getMyDiet = async (name) => {
  //   const my_data = await fetch(
  //     `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&diet=${name}&number=6`
  //   );
  //   const diet = await my_data.json();
  //   setDiet(diet.results);
  //   console.log(diet);
  // };

  // useEffect(() => {
  //   getMyDiet(params.type);
  // }, [params.type]);
  return (
    <div>
      <MyGrid
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {my_diet.map((recipe_diet) => {
          return (
            <Card
              animate={{
                opacity: 1,
                y: 0,
              }}
              initial={{ opacity: 0, y: -50 }}
              transition={{ delay: 1, type: "spring", stiffness: 250 }}
              key={recipe_diet.id}
            >
              <Link to={"/detail/" + recipe_diet.id}>
                <img src={recipe_diet.image} alt={recipe_diet.title} />

                <h4>{recipe_diet.title}</h4>
              </Link>
            </Card>
          );
        })}
      </MyGrid>
    </div>
  );
}
const MyGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 3rem;
  padding-bottom: 2rem;
  border: 1px solid black;
`;

const Card = styled(motion.div)`
  cursor: pointer;
  position: relative;

  img {
    border-radius: 2.5rem;

    width: 100%;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Diet;
