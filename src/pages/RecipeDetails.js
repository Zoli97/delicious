import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
// import * as GrIcons from "react-icons/gr";
import { motion } from "framer-motion";

function RecipeDetails() {
  const [details, setDetails] = useState({});
  const [product, setProductMatch] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  let params = useParams();

  const fetchDetail = async () => {
    const data_detail = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailSave = await data_detail.json();
    console.log(detailSave);
    setDetails(detailSave);
    setProductMatch(detailSave);
  };

  useEffect(() => {
    fetchDetail(params.id);
  }, [params.id]);

  return (
    <DetailWrapper>
      <Card style={{ position: "relative" }}>
        <h2 style={{ color: "white" }}>{details.title}</h2>
        <img src={details.image} alt={details.title} />
        <ScoreBox>
          <h5>HighScore: {details.healthScore}</h5>
        </ScoreBox>
      </Card>

      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients{" "}
        </Button>

        <Button
          className={activeTab === "productMatches" ? "active" : ""}
          onClick={() => setActiveTab("productMatches")}
        >
          {" "}
          Wine Pairing
        </Button>

        {activeTab === "instructions" && (
          <div>
            <p
              style={{ color: "white" }}
              dangerouslySetInnerHTML={{ __html: details.summary }}
            ></p>
            <p
              style={{ color: "white" }}
              dangerouslySetInnerHTML={{ __html: details.instructions }}
            ></p>
          </div>
        )}

        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient, index) => (
              <li key={index}>{ingredient.original}</li>
            ))}
          </ul>
        )}

        {activeTab === "productMatches" && (
          <div>
            {product.winePairing.productMatches.map((product, index) => (
              <p key={index} style={{ color: "white" }}>
                {product.description}
              </p>
            ))}
          </div>
        )}
      </Info>
    </DetailWrapper>
  );
}

const Card = styled.div`
  position: relative;
`;

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  .active {
    background: #017a01;
    color: white;
  }

  p {
    margin-top: 2rem;
    line-height: 2rem;
  }
  a {
    color: white;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
    color: white;
  }
  ul {
    margin-top: 2rem;
  }

  img {
    margin-top: 2rem;
    border-radius: 2.5rem;
    object-fit: cover;
    position: relative;
    cursor: pointer;
    transition: all ease-out 200ms;

    :hover {
      transform: scale(1.03);
    }
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  margin-right: 2rem;
  font-weight: 600;
  background-color: rgb(253, 239, 214);
  cursor: pointer;
  border: none;
`;
const Info = styled(motion.div)`
  margin-left: 10rem;
`;

const ScoreText = styled.div`
  position: relative;
  border-radius: 12px;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(8, 38, 20, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);

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

const ScoreBox = styled.div`
  position: absolute;
  top: 20%;
  left: 10%;
  transform: translate(-20%, 10%);
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

export default RecipeDetails;
