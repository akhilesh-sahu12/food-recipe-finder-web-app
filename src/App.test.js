import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

describe('App Component', () => {
  it('renders App component', () => {
    render(
      <Router>
        <App />
      </Router>
    );

    // Check if the header is rendered
    expect(screen.getByText('Food Recipe Finder')).toBeInTheDocument();

    // Check if the sidebar is rendered
    expect(screen.getByText('Contact Us')).toBeInTheDocument();

    // Check if the home page is rendered
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
