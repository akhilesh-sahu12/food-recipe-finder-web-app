import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: 'John Doe', // Example user data
    searchHistory: ['Pasta', 'Pizza'], // Example search history
    favoriteRecipes: [{ name: 'Spaghetti Carbonara' }, { name: 'Margherita Pizza' }], // Example favorite recipes
  });

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};
