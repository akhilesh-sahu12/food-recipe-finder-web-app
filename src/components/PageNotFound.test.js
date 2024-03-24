import React from 'react';
import { render, screen } from '@testing-library/react';
import PageNotFound from './PageNotFound';

describe('PageNotFound component', () => {
  test('renders 404 heading', () => {
    render(<PageNotFound />);
    const headingElement = screen.getByText(/404 - Page Not Found/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders apology message', () => {
    render(<PageNotFound />);
    const apologyMessage = screen.getByText(/Sorry, the page you are looking for does not exist/i);
    expect(apologyMessage).toBeInTheDocument();
  });
});
