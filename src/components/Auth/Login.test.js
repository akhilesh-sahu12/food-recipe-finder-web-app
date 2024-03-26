import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Login';
import { AuthProvider } from '../../context/AuthContext';

// Mock the react-router-dom's useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

// Mock the context provider
jest.mock('../../context/AuthContext', () => ({
  ...jest.requireActual('../../context/AuthContext'),
  useAuth: () => ({
    userLogin: jest.fn(),
    registeredUsers: [
      { email: 'akhilesh.sahu@tech.com', password: 'password123' },
      { email: 'akhilesh@org.in', password: 'password123456' }
    ],
    userLoginDetails: jest.fn(),
  }),
}));

describe('Login Component', () => {
  it('renders Login component', () => {
    render(
      <AuthProvider>
        <Router>
          <Login />
        </Router>
      </AuthProvider>
    );

    // Check if the component renders without crashing
    expect(screen.getAllByText(/Login/i)).toEqual(expect.arrayContaining([expect.any(HTMLElement)]));

    const emailLabels = screen.getAllByLabelText(/Email/i);
    expect(emailLabels.length).toBeGreaterThan(0);

    const passwordLabels = screen.getAllByLabelText(/Password/i);
    expect(passwordLabels.length).toBeGreaterThan(0);

    expect(screen.getByText(/Don't have an account?/)).toBeInTheDocument();
  });

  it('submits the form with correct credentials', async () => {
    render(
      <AuthProvider>
        <Router>
          <Login />
        </Router>
      </AuthProvider>
    );

    // Fill in the form with correct credentials
    fireEvent.change(screen.getAllByLabelText(/Email/i)[0], { target: { value: 'akhilesh.sahu@tech.com' } });
    fireEvent.change(screen.getAllByLabelText(/Password/i)[0], { target: { value: 'password123' } });

  });

  it('displays warning for incorrect credentials', async () => {
    render(
      <AuthProvider>
        <Router>
          <Login />
        </Router>
      </AuthProvider>
    );

    // Fill in the form with incorrect credentials
    fireEvent.change(screen.getAllByLabelText(/Email/i)[0], { target: { value: 'invalid@akhil.com' } });
    fireEvent.change(screen.getAllByLabelText(/Password/i)[0], { target: { value: 'wrongpassword1' } });

    // Submit the form
    fireEvent.click(screen.getAllByText(/Login/i)[1]);
    

    // Wait for warning message
    await waitFor(() => {
      expect(screen.getByText('Login Credentials are incorrect!')).toBeInTheDocument();
      
    });
  });
});
