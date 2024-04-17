import React, { useState, useEffect } from "react";
import "../design/Meal.css";
function MealInfoComponent({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    getInfoMeal();
  }, [meal.id]);

  const getInfoMeal = async () => {
    try {
      const response = fetch(
        `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${process.env.REACT_APP_API_KEY}&includeNutrition=false`
      );
      const dataInfo = await response.json();
      setImageUrl(dataInfo.image);
      console.log(dataInfo);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <article>
        <div className="card">
          <div className="slide slide1">
            <div className="content">
              <div className="image">
                <img src={imageUrl} alt="" />
              </div>
            </div>
          </div>

          <div className="slide slide2">
            <div className="content">
              <h3>{meal.title}</h3>
              <p>{meal.readyInMinutes} minutes</p>
            </div>
          </div>
          <a href={meal.sourceUrl}>Go to Recipe</a>
        </div>
      </article>
    </div>
  );
}

export default MealInfoComponent;
