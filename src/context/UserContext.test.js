import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { UserProvider, UserContext } from './UserContext';

describe('UserProvider Component', () => {
  it('provides user data and functions to children components', () => {
    // Mock user data
    const userData = {
      username: 'testUser',
      history: ['recipe1', 'recipe2'],
      favorites: ['recipe3'],
    };

    // Mock addToHistory function
    const mockAddToHistory = jest.fn();

    // Mock toggleFavorite function
    const mockToggleFavorite = jest.fn();

    // Render the component with mocked context values
    const { getByText } = render(
      <UserContext.Provider
        value={{
          user: userData,
          addToHistory: mockAddToHistory,
          toggleFavorite: mockToggleFavorite,
        }}
      >
        <UserProvider>
          <TestComponent />
        </UserProvider>
      </UserContext.Provider>
    );

    // Check if the username is rendered
    expect(getByText('Username:')).toBeInTheDocument();

    // Check if the search history is rendered
    expect(getByText('Search History: recipe1, recipe2')).toBeInTheDocument();

    // Check if the favorites are rendered
    expect(getByText('Favorites: recipe3')).toBeInTheDocument();
  });
});

// A test component to access the UserContext and display user data
const TestComponent = () => {
  const { user, addToHistory, toggleFavorite } = React.useContext(UserContext);

  return (
    <div>
      <p>Username: {user.username}</p>
      <p>Search History: {user.history.join(', ')}</p>
      <p>Favorites: {user.favorites.join(', ')}</p>
    </div>
  );
};
