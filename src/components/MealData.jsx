import React, { useState, useEffect } from "react";
import { GiMeal } from "react-icons/gi";
import styled from "styled-components";

function MealData() {
  const [calories, setCalories] = useState(2500);

  //i want to make sure that i have the data first before i rendering anything out.
  //when the component esentially gets render or munted i want to run this function as soon as possible.
  // useEffect(() => {
  //   getMealData();
  // });

  const getMealData = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_KEY}&targetCalories=${calories}&timeFrame=day`
      );
      const dataMealPlan = await response.json();

      console.log(dataMealPlan);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setCalories(e.target.value);
  };
  return (
    <div className="container">
      <Form action="">
        <div className="group">
          <input
            className="my_input"
            type="number"
            name=""
            max="10000"
            min="1"
            required
            // onChange={handleChange}
          />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label className="my_label">Calories</label>
        </div>
        <SubmitButton onClick={getMealData}>
          <GiMeal style={{ fontSize: "1.7rem" }} />
          Get Meal Plan
        </SubmitButton>
      </Form>
    </div>
  );
}

const SubmitButton = styled.button`
  width: 160px;
  height: 65px;
  cursor: pointer;
  background-color: rgb(253, 239, 214);
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.83em;
  font-weight: bold;
  color: rgb(56, 56, 56);
  text-decoration: none;
  border-radius: 0.7em;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default MealData;
