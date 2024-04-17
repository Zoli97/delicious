import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css/core";
import styled from "styled-components";
import * as AiIcons from "react-icons/ai";

function Dessert() {
  const titleStyle = {
    marginTop: "2rem",
    marginBottom: "2rem",
    color: "white",
  };

  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    getDessertsFood();
  }, []);

  const getDessertsFood = async () => {
    const checkDessert = localStorage.getItem("dessert");

    if (checkDessert) {
      setDesserts(JSON.parse(checkDessert));
    } else {
      const url_ = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&tags=dessert&number=10`
      );
      const data_dessert = await url_.json();

      setDesserts(data_dessert.recipes);
      console.log(data_dessert);
    }
  };

  return (
    <div>
      <Wrapper>
        <h3 style={titleStyle}>Desserts</h3>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
            mediaQuery: "min",
            breakpoints: {
              320: {
                perPage: 1,
              },

              564: {
                perPage: 1,
              },

              600: {
                perPage: 1,
              },

              700: {
                perPage: 1,
              },

              800: {
                perPage: 2,
              },

              1025: {
                perPage: 2,
              },

              1200: {
                perPage: 2,
              },

              1300: {
                perPage: 3,
              },

              1400: {
                perPage: 3,
              },

              1500: {
                perPage: 4,
              },
            },
          }}
        >
          {desserts.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card key={recipe.id}>
                  <Link to={"/detail/" + recipe.id}>
                    <p>{recipe.title}</p>

                    <img src={recipe.image} alt={recipe.title} />
                    <ScoreBox>
                      <h5> Score: {recipe.healthScore}</h5>
                    </ScoreBox>

                    <Gradient />
                  </Link>
                </Card>

                <Info>
                  <p>
                    {" "}
                    <AiIcons.AiOutlineClockCircle
                      style={{ marginRight: "10px" }}
                    />
                    {recipe.readyInMinutes} min
                  </p>
                </Info>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}
const Wrapper = styled.div`
  margin: 4rem 0rem;

  h3 {
    color: white;
  }
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;

  position: relative;
  cursor: pointer;

  box-shadow: rgba(0, 0, 0, 0.3) 0px 22px 10px 0px;

  img {
    border-radius: 2.5rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    width: 100%;
    position: absolute;
    z-index: 99;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

const Info = styled.div`
  min-height: 8rem;
  border-radius: 2rem;
  overflow: hidden;
  backdrop-filter: blur(18px) saturate(70%);
  -webkit-backdrop-filter: blur(25px) saturate(70%);
  background-color: rgba(13, 74, 47, 0.45);
  border-radius: 25px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  width: 100%;
  position: absolute;
  z-index: 99;
  left: 50%;
  bottom: -30%;
  transform: translate(-50%, -30%);
  display: flex;
  padding: 1em;
  overflow: hidden;

  p {
    text-align: center;
    color: white;
  }
`;

const ScoreBox = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  transform: translate(-10%, 10%);

  backdrop-filter: blur(10px) saturate(184%);
  -webkit-backdrop-filter: blur(10px) saturate(184%);
  background-color: rgba(0, 0, 0, 0.65);
  border-radius: 25px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  z-index: 99;
  padding: 10px 30px;

  h5 {
    color: white;
  }
`;
export default Dessert;
