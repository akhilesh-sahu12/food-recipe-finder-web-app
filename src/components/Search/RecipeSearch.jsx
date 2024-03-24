import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './RecipeSearch.css';

function RecipeSearch() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const API_ID = 'd86f621d';
  const API_KEY = '57021c9921626b1458c88e1419d966fc';

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
      );
      setRecipes(response.data.hits);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div className='recipe-search'>
      <form onSubmit={handleSearch}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for recipes..." />
        <button type="submit">Search</button>
      </form>
      <div className='recipe-card'>
        {recipes.map(recipe => (
          <div key={recipe.recipe.uri}>
            <h2>{recipe.recipe.label}</h2>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <p>Calories: {recipe.recipe.calories.toFixed(2)}</p>
             {/* Pass the recipe URL to RecipeDetails component */}
            <Link to={`/recipe/${encodeURIComponent(recipe._links.self.href)}`}>
              <button>Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeSearch;
