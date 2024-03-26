import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import './RecipeSearch.css';
import RecipeDetails from './RecipeDetails';
import { UserContext } from '../../context/UserContext';
import Q from 'q';

function RecipeSearch() {
  const [query, setQuery] = useState('');
  const [ingrRange, setIngrRange] = useState('');
  const [dietLabels, setDietLabels] = useState([]);
  const [healthLabels, setHealthLabels] = useState([]);
  const [cuisineType, setCuisineType] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);


  const API_ID = 'd86f621d';
  const API_KEY = '57021c9921626b1458c88e1419d966fc';

  const { addToHistory, toggleFavorite } = useContext(UserContext); 

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const params = {
        q: query,
        app_id: API_ID,
        app_key: API_KEY,
      };
      if (ingrRange) params.ingr = ingrRange;
      if (dietLabels.length > 0) params.diet = dietLabels.join(',');
      if (healthLabels.length > 0) params.health = healthLabels.join(',');
      if (cuisineType) params.cuisineType = cuisineType;

      const response = await axios.get('https://api.edamam.com/api/recipes/v2?type=public', { params });
      setRecipes(response.data.hits);
      // Add the search query to search history
      if(query != "")
      addToHistory(query);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  // Function to set the selected recipe
  const selectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className='recipe-search'>
      <form onSubmit={handleSearch}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for recipes..." />
        <input type="text" value={ingrRange} onChange={(e) => setIngrRange(e.target.value)} placeholder="Number of Ingredients (MIN-MAX)" />
        <select multiple value={dietLabels} onChange={(e) => setDietLabels(Array.from(e.target.selectedOptions, option => option.value))}>
          <option value="balanced">Balanced</option>
          <option value="high-fiber">High-Fiber</option>
          <option value="high-protein">High-Protein</option>
          <option value="low-carb">Low-Carb</option>
          <option value="low-fat">Low-Fat</option>
          <option value="low-sodium">Low-Sodium</option>
        </select>
        <select multiple value={healthLabels} onChange={(e) => setHealthLabels(Array.from(e.target.selectedOptions, option => option.value))}>
          <option value="alcohol-cocktail">Alcohol Cocktail</option>
          <option value="alcohol-free">Alcohol-Free</option>
          <option value="celery-free">Celery-Free</option>
        </select>
        <select value={cuisineType} onChange={(e) => setCuisineType(e.target.value)}>
          <option value="">Select Cuisine Type</option>
          <option value="American">American</option>
          <option value="Asian">Asian</option>
          <option value="British">British</option>
          <option value="Caribbean">Caribbean</option>
          <option value="Central Europe">Central Europe</option>
          <option value="Chinese">Chinese</option>
        </select>
        <button type="submit">Search</button>
      </form>
      <div className='recipe-card'>
        {recipes.map(recipe => (
          <div key={recipe.recipe.uri}>
            <h2>{recipe.recipe.label}</h2>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <p>Calories: {recipe.recipe.calories.toFixed(2)}</p>
            {/* Use Link to pass the selected recipe as props to RecipeDetails */}
            <Link to={`/recipe/${encodeURIComponent(recipe._links.self.href)}`}>
              <button>Details</button>
            </Link>
            <button className='favorite-button' onClick={() => toggleFavorite(recipe.recipe.label)}>Add In Favorite</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeSearch;
