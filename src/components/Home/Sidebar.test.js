import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar';

test('renders Sidebar component', () => {
  // Mock function for OpenSidebar
  const openSidebarMock = jest.fn();

  render(
    <Router>
      <Sidebar openSidebarToggle={true} OpenSidebar={openSidebarMock} />
    </Router>
  );

  // Check if the component renders without crashing
  expect(screen.getAllByText(/Food Recipe Finder/i)[0]).toBeInTheDocument();
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
  expect(screen.getAllByText(/Recipe Search/i)[1]).toBeInTheDocument();
  expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  expect(screen.getByText(/Login/i)).toBeInTheDocument();
  expect(screen.getByText(/Register/i)).toBeInTheDocument();
  expect(screen.getByText(/Settings/i)).toBeInTheDocument();
  expect(screen.getByText(/Contact us/i)).toBeInTheDocument();

  // Simulate clicking on the 'X' icon and check if the OpenSidebar function is called
  userEvent.click(screen.getByText('X'));
  expect(openSidebarMock).toHaveBeenCalled();
});
