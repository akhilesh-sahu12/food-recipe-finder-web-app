import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import './UserDashboard.css'; 

const UserDashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Welcome back, {user.name}!</h1>
      <div className="search-history">
        <h2>Search History</h2>
        <ul>
          {user.searchHistory.map((search, index) => (
            <li key={index}>{search}</li>
          ))}
        </ul>
      </div>
      <div className="favorite-recipes">
        <h2>Favorite Recipes</h2>
        <ul>
          {user.favoriteRecipes.map((recipe, index) => (
            <li key={index}>{recipe.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
