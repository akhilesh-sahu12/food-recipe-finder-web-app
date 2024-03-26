import React from 'react';
import { render } from '@testing-library/react';
import AuthGuard from './AuthGuard';
import { AuthProvider } from '../context/AuthContext';
import { BrowserRouter as Router } from 'react-router-dom';

describe('AuthGuard component', () => {
  it('renders child routes when authenticated', () => {
    const { container } = render(
      <AuthProvider>
        <Router>
          <AuthGuard />
        </Router>
      </AuthProvider>
    );

    // Add assertions for your specific case
    // For example, check if child routes are rendered when authenticated
    expect(container).toMatchSnapshot();
  });
});
