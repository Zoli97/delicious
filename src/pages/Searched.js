import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Searched() {
  const [searchedRecipes, setSearchRecipes] = useState([]);

  let params = useParams();

  const getSearched = async (name) => {
    const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=12`;

    try {
      const data = await fetch(URL);
      const recipes = await data.json();
      console.log(recipes);
      setSearchRecipes(recipes.results);
      return encodeURI(data);
    } catch (err) {
      console.log("Error" + err);
    }
  };

  // take a query take it from params and update every time i search
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);
  return (
    <>
      <MyGrid>
        {searchedRecipes.map((recipe) => {
          return (
            <Card key={recipe.id}>
              <Link to={"/detail/" + recipe.id}>
                <img src={recipe.image} alt="" />
                <h4>{recipe.title}</h4>
              </Link>
            </Card>
          );
        })}
      </MyGrid>
    </>
  );
}

const MyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
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

export default Searched;
