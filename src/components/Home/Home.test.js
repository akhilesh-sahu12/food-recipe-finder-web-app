import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders Home component', () => {
  render(<Home />);

  // Check if the component renders without crashing
  expect(screen.getAllByText(/Home/i)[0]).toBeInTheDocument();

  // Check if cards are rendered
  expect(screen.getAllByText(/IPOs/i)[0]).toBeInTheDocument();
  expect(screen.getAllByText(/Currency Rates/i)[0]).toBeInTheDocument();
  expect(screen.getByText(/Charts/i)).toBeInTheDocument();
  expect(screen.getByText(/Settings/i)).toBeInTheDocument();

  // Check if general information is rendered
  //expect(screen.getByText(/This dashboard allows you to view upcoming Initial Public Offerings (IPOs) and track the latest currency exchange rates./i)).toBeInTheDocument();
  expect(screen.getAllByText(/Utilize the navigation to explore different sections of the dashboard./i)[0]).toBeInTheDocument();

  // Check if user features are rendered
  expect(screen.getByText(/User Authentication: Log in or register to access personalized features./i)).toBeInTheDocument();
  expect(screen.getByText(/Upcoming IPO Calendar: View a calendar of upcoming IPOs./i)).toBeInTheDocument();
  expect(screen.getByText(/Currency Exchange Rates: Track the latest currency rates./i)).toBeInTheDocument();
  expect(screen.getByText(/Data Refresh: Refresh data periodically or on user request./i)).toBeInTheDocument();

  // Check if mobile features are rendered
  expect(screen.getAllByText(/Mobile-Specific Features/i)[0]).toBeInTheDocument();
  expect(screen.getByText(/The mobile app provides enhanced user experience with mobile-specific features and gestures./i)).toBeInTheDocument();
});
