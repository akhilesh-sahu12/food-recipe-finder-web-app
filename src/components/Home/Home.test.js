import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Home component', () => {
  render(<Home />);

  // Check if the component renders without crashing
  expect(screen.getAllByText(/Home/i)[0]).toBeInTheDocument();

  // Check if cards are rendered
  expect(screen.getAllByText(/Recipes for breakfast/i)[0]).toBeInTheDocument();
  expect(screen.getAllByText(/Recipes for lunch/i)[0]).toBeInTheDocument();
  expect(screen.getByText(/Recipes for dinner/i)).toBeInTheDocument();
  expect(screen.getByText(/Settings/i)).toBeInTheDocument();
});
