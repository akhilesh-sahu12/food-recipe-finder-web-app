import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import RecipeDetails from './RecipeDetails';
import axios from 'axios';
import { useParams } from 'react-router-dom';

// Mocking the useParams hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn()
}));

// Mocking the axios module
jest.mock('axios');

describe('RecipeDetails Component', () => {
  it('renders loading state initially', async () => {
    useParams.mockReturnValue({ recipeId: '/recipe/123' });
    axios.get.mockResolvedValueOnce({ data: { recipe: { label: 'Test Recipe', image: 'test.jpg', ingredients: [], healthLabels: [], source: 'Test Source', url: 'http://test.com' } } });

    render(<RecipeDetails />);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.getByText(/Test Recipe/i)).toBeInTheDocument();
      expect(screen.getByText(/Ingredients:/i)).toBeInTheDocument();
      expect(screen.getByText(/Health Labels:/i)).toBeInTheDocument();
      expect(screen.getByText(/Source:/i)).toBeInTheDocument();
      expect(screen.getByText(/View Recipe/i)).toBeInTheDocument();
    });
  });

  it('renders error message if fetching fails', async () => {
    useParams.mockReturnValue({ recipeId: '/recipe/123' });
    axios.get.mockRejectedValueOnce(new Error('Error fetching recipe details'));

    render(<RecipeDetails />);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.getByText(/Error fetching recipe details/i)).toBeInTheDocument();
    });
  });
});
