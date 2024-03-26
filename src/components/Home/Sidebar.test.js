import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar';

describe('Sidebar Component', () => {
  it('renders Sidebar component', () => {
    const { getByText, getByTestId } = render(
      <Router>
        <Sidebar openSidebarToggle={true} OpenSidebar={() => {}} />
      </Router>
    );

    // Check if the sidebar title is rendered
    expect(getByText('Food Recipe Finder')).toBeInTheDocument();

    // Check if all sidebar links are rendered
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Recipe Search')).toBeInTheDocument();
    expect(getByText('Dashboard')).toBeInTheDocument();
    expect(getByText('Login')).toBeInTheDocument();
    expect(getByText('Register')).toBeInTheDocument();
    expect(getByText('Settings')).toBeInTheDocument();
    expect(getByText('Contact Us')).toBeInTheDocument();
  });
});
