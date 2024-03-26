import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import RecipeSearch from './RecipeSearch';
import { UserContext } from '../../context/UserContext';

// Mock the useContext hook
jest.mock('../../context/UserContext', () => ({
  UserContext: {
    Consumer: ({ children }) => children({ user: { favorites: [] }, addToHistory: jest.fn(), toggleFavorite: jest.fn() })
  }
}));

describe('RecipeSearch Component', () => {
  it('renders RecipeSearch component', () => {
    render(<RecipeSearch />);
    
    // Check if the component renders without crashing
    expect(screen.getByPlaceholderText(/Search for recipes.../i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Number of Ingredients/i)).toBeInTheDocument();
    expect(screen.getByText(/Balanced/i)).toBeInTheDocument();
    expect(screen.getByText(/High-Fiber/i)).toBeInTheDocument();
    expect(screen.getByText(/High-Protein/i)).toBeInTheDocument();
    expect(screen.getByText(/Low-Carb/i)).toBeInTheDocument();
    expect(screen.getByText(/Low-Fat/i)).toBeInTheDocument();
    expect(screen.getByText(/Low-Sodium/i)).toBeInTheDocument();
    expect(screen.getByText(/Alcohol Cocktail/i)).toBeInTheDocument();
    expect(screen.getByText(/Alcohol-Free/i)).toBeInTheDocument();
    expect(screen.getByText(/Celery-Free/i)).toBeInTheDocument();
    expect(screen.getByText(/American/i)).toBeInTheDocument();
    expect(screen.getByText(/Asian/i)).toBeInTheDocument();
    expect(screen.getByText(/British/i)).toBeInTheDocument();
    expect(screen.getByText(/Caribbean/i)).toBeInTheDocument();
    expect(screen.getByText(/Central Europe/i)).toBeInTheDocument();
    expect(screen.getByText(/Chinese/i)).toBeInTheDocument();
    expect(screen.getByText(/Select Cuisine Type/i)).toBeInTheDocument();
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
    expect(screen.getByText(/Refresh/i)).toBeInTheDocument();
  });
});
