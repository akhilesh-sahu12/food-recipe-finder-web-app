import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './RecipeDetails.css';

function RecipeDetails() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(recipeId);
        console.log("RECIPE DETAILS", response.data);
        setRecipe(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipe details:', error);
        setError('Error fetching recipe details. Please try again later.');
        setLoading(false);
      }
    };
    fetchRecipeDetails();
  }, [recipeId]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!recipe) return null; // Optionally handle if recipe is null

  return (
    <div className="recipe-detail">
      <header>
        <h1>{recipe.recipe.label}</h1>
      </header>
      <main>
        <img src={recipe.recipe.image} alt={recipe.recipe.label} />
        
        <h2>Ingredients:</h2>
        <ul>
          {recipe.recipe.ingredients && recipe.recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.text}</li>
          ))}
        </ul>

        <h2>Health Labels:</h2>
        <ul>
          {recipe.recipe.healthLabels && recipe.recipe.healthLabels.map((label, index) => (
            <li key={index}>{label}</li>
          ))}
        </ul>

        <h2>Source:</h2>
        <p>{recipe.source}</p>
        <p>
        <a href={recipe.url} target="_blank" rel="noopener noreferrer">---View Recipe---</a>
        </p>
      </main>
    </div>
  );
}

export default RecipeDetails;