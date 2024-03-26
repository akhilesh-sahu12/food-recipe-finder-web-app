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
    expect(getByTestId('home-link')).toBeInTheDocument();
    expect(getByTestId('search-link')).toBeInTheDocument();
    expect(getByTestId('dashboard-link')).toBeInTheDocument();
    expect(getByTestId('login-link')).toBeInTheDocument();
    expect(getByTestId('register-link')).toBeInTheDocument();
    expect(getByTestId('settings-link')).toBeInTheDocument();
    expect(getByTestId('contact-link')).toBeInTheDocument();
  });
});
