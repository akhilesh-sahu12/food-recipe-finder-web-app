import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { useAuth} from '../../context/AuthContext';
import './UserDashboard.css'; 

const UserDashboard = () => {
  const { user } = useContext(UserContext);
 const {currentUser} =useAuth();
 console.log('user', user)
  
  if (!user) {
    return <div className="recipe-detail">No user details available.</div>;
  }

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Welcome back, {currentUser.username || 'User'}!</h1>
      <div className="search-history">
        <h2>Search History</h2>
        {user.history && user.history.length > 0 ? (
          <ul>
            {user.history.map((search, index) => (
              <li key={index}>{search}</li>
            ))}
          </ul>
        ) : (
          <p>No search history available.</p>
        )}
      </div>
      <div className="favorite-recipes">
        <h2>Favorite Recipes</h2>
        {user.favorites && user.favorites.length > 0 ? (
          <ul>
            {user.favorites.map((favorite, index) => (
              <li key={index}>{favorite}</li>
            ))}
          </ul>
        ) : (
          <p>No favorite recipes available.</p>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
