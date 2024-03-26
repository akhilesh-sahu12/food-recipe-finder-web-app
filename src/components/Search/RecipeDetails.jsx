import React from 'react';
import './RecipeDetails.css';

function RecipeDetails({ recipe }) {
  if (!recipe) {
    return <div className="recipe-detail">No recipe details available.</div>;
  }

  const {
    name,
    images,
    ingredients,
    totalNutrients,
    preparation,
    healthLabels,
    url
  } = recipe;

  return (
    <div className="recipe-detail">
      <header>
        <h1>{name}</h1>
      </header>
      <main>
        {images && images.length > 0 && (
          <img src={images[0].url} alt={name} />
        )}
        
        <h2>Ingredients:</h2>
        <ul>
          {ingredients && ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.text}</li>
          ))}
        </ul>

        <h2>Nutritional Facts:</h2>
        <ul>
          {totalNutrients && Object.keys(totalNutrients).map((key, index) => (
            <li key={index}>
              {totalNutrients[key].label}: {totalNutrients[key].quantity.toFixed(2)} {totalNutrients[key].unit}
            </li>
          ))}
        </ul>

        <h2>Preparation Steps:</h2>
        <ol>
          {preparation && preparation.map((step, index) => (
            <li key={index}>{step.text}</li>
          ))}
        </ol>

        <h2>Health Labels:</h2>
        <ul>
          {healthLabels && healthLabels.map((label, index) => (
            <li key={index}>{label}</li>
          ))}
        </ul>

        <h2>Source:</h2>
        <p>{url}</p>

        <a href={url} target="_blank" rel="noopener noreferrer">View Recipe</a>
      </main>
    </div>
  );
}

export default RecipeDetails;
