import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  //get the italian ex
  let params = useParams();
  const getCuisine = async (name) => {
    const data2 = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=10`
    );
    const recipes = await data2.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    //to fetch it
    //getCuisine("Italian");
    getCuisine(params.type);
    console.log(params.type);

    //when param chagnes in the url make sure i run this usseffect again
  }, [params.type]);

  return (
    <MyGrid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {cuisine.map((cui_recipe) => {
        return (
          <Card
            animate={{
              opacity: 1,
              y: 0,
            }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ delay: 1, type: "spring", stiffness: 250 }}
            key={cui_recipe.id}
          >
            <Link to={`/detail/` + cui_recipe.id}>
              <img src={cui_recipe.image} alt={cui_recipe.title} />
              <h4>{cui_recipe.title}</h4>
            </Link>
          </Card>
        );
      })}
    </MyGrid>
  );
}

const MyGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled(motion.div)`
  img {
    width: 100%;
    border-radius: 2.5rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
export default Cuisine;
