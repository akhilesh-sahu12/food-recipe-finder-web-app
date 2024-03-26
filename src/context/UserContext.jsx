import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // State to manage user data including username, search history, and favorite recipes
  const [user, setUser] = useState({ username: '', history: [], favorites: [] });

  // Function to add a recipe to user's search history
  const addToHistory = (recipe) => {
    setUser((prevUser) => ({
      ...prevUser,
      history: [recipe, ...prevUser.history],
    }));
    console.log("Search recipe added successfully in history",user);
  };

  // Function to toggle a recipe as favorite
  const toggleFavorite = (recipe) => {
    setUser((prevUser) => ({
      ...prevUser,
      favorites:  [ recipe, ...prevUser.favorites],
    }));
    console.log("Successfully Added this recipe in your favorite",recipe);
  };

  // Providing the user data and functions to the children components
  return (
    <UserContext.Provider value={{ user, setUser, addToHistory, toggleFavorite }}>
      {children}
    </UserContext.Provider>
  );
};
