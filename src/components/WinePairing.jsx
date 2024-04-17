import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css/core";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function WinePairing() {
  const [wineRecommendation, setWineRecommendation] = useState([]);
  let params = useParams();

  useEffect(() => {
    getWine();
  }, []);
  const getWine = async () => {
    //const checkItem = localStorage.getItem("wine");

    // if (checkItem) {} else { }
    // setWinePairing(JSON.parse(checkItem));

    const wine_api = await fetch(
      `https://api.spoonacular.com/food/wine/recommendation?apiKey=${process.env.REACT_APP_API_KEY}&wine=merlot&number=12`
    );
    const wine_data = await wine_api.json();
    //localStorage.setItem("wine", JSON.stringify(wine_data));
    setWineRecommendation(wine_data.recommendedWines);
    console.log(wine_data);
  };
  return (
    <div>
      <MyWrapper>
        <h3>Wine Recommendation</h3>
        <Splide
          options={{
            perPage: 4,
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
          {wineRecommendation.map((wineRec) => {
            return (
              <SplideSlide key={wineRec.id}>
                <Card key={wineRec.id}>
                  <Link to={"/detail/" + wineRec.id}>
                    <p>{wineRec.title}</p>
                    <img src={wineRec.imageUrl} alt="winePair" />
                    <ScoreBox>
                      <h5> Rate: {parseInt(wineRec.ratingCount)}</h5>
                    </ScoreBox>
                    <Gradient />
                  </Link>
                </Card>

                <Price>
                  <p> {wineRec.price}</p>
                </Price>
              </SplideSlide>
            );
          })}
        </Splide>
      </MyWrapper>
    </div>
  );
}

const MyWrapper = styled.div`
  margin: 4rem 0rem;

  h3 {
    color: white;
  }
`;

const Card = styled.div`
  min-height: 25rem;
  position: relative;
  border-radius: 2rem;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 22px 10px 0px;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    object-fit: cover;
    border-radius: 2rem;
  }

  p {
    width: 100%;
    position: absolute;
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
    z-index: 999;
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

const Price = styled.div`
  width: 100%;
  min-height: 8rem;
  border-radius: 2rem;
  overflow: hidden;
  backdrop-filter: blur(18px) saturate(70%);
  -webkit-backdrop-filter: blur(25px) saturate(70%);
  background-color: rgba(13, 74, 47, 0.45);
  border-radius: 25px;
  border: 1px solid rgba(0, 0, 0, 0.125);
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

const Gradient = styled.div`
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default WinePairing;
