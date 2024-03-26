import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {
  it('renders Home component', () => {
    const { getByText, getByTestId } = render(<Home />);

    // Check if the main title is rendered
    expect(getByText('Home')).toBeInTheDocument();

    // Check if all cards are rendered
    expect(getByText('Recipes for breakfast')).toBeInTheDocument();
    expect(getByText('Recipes for lunch')).toBeInTheDocument();
    expect(getByText('Recipes for dinner')).toBeInTheDocument();
    expect(getByText('Total')).toBeInTheDocument();

    // Check if general information is rendered
    expect(getByText('The application will serve as a platform where users can explore a variety of food recipes. It will integrate the Edamam API to fetch recipe data based on user queries. The goal is to create a user-friendly application that provides clear and concise information about food recipes, including ingredients, nutritional information, and cooking instructions.')).toBeInTheDocument();

    // Check if user features list is rendered
    expect(getByText('Features List')).toBeInTheDocument();
    expect(getByText('User Authentication: Implement user login and registration functionality.')).toBeInTheDocument();
    expect(getByText('Recipe Search: Allow users to search for recipes based on ingredients, cuisine type, dietary restrictions, etc., using the Edamam API.')).toBeInTheDocument();
    expect(getByText('Recipe Details: Display detailed information about recipes, including ingredients, nutritional facts, and preparation steps.')).toBeInTheDocument();
    expect(getByText('Responsive Design: Ensure the application is fully responsive and functional on both web and mobile platforms.')).toBeInTheDocument();
    expect(getByText('User Dashboard: After logging in, users should have a dashboard displaying their search history and favorite recipes.')).toBeInTheDocument();
    expect(getByText('Data Refresh: Implement functionality to refresh data periodically or on user request.')).toBeInTheDocument();

    // Check if mobile features section is rendered
    expect(getByText('Mobile-Specific Features')).toBeInTheDocument();
    expect(getByText('The mobile app provides enhanced user experience with mobile-specific features and gestures.')).toBeInTheDocument();
  });
});
