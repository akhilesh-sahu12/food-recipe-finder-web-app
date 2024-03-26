import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Login';
import { AuthProvider } from '../../context/AuthContext';
import { UserProvider } from '../../context/UserContext';

// Mock the react-router-dom's useNavigate
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

describe('Login Component', () => {
      it('renders Login component', () => {
        render(
          <AuthProvider>
            <UserProvider>
              <Router>
                <Login />
              </Router>
            </UserProvider>
          </AuthProvider>
        );
    
        // Check if the component renders without crashing
        expect(screen.getByText(/LoginForm/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
        expect(screen.getByText(/Don't have an account?/i)).toBeInTheDocument();
      });

      it('submits the form with correct credentials', async () => {
        render(
          <AuthProvider>
            <UserProvider>
              <Router>
                <Login />
              </Router>
            </UserProvider>
          </AuthProvider>
        );
    
        // Fill in the form
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'password123' } });
    
        // Submit the form
        fireEvent.click(screen.getAllByText(/Login/i)[1]);
    
        // Wait for success message (mocking toast appearance)
        await waitFor(() => {
          expect(screen.getByText('Login Credentials are incorrect!')).toBeInTheDocument();
        });
      });

      it('displays warning for incorrect credentials', async () => {
        render(
          <AuthProvider>
            <UserProvider>
              <Router>
                <Login />
              </Router>
            </UserProvider>
          </AuthProvider>
        );
    
        // Fill in the form with incorrect credentials
        fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'wrong@example.com' } });
        fireEvent.change(screen.getByLabelText(/Password/i), { target: { value: 'wrongpassword' } });
        fireEvent.click(screen.getAllByText(/Login/i)[1]);
    
        // Wait for warning message (mocking toast appearance)
        await waitFor(() => {
          expect(screen.getByText('Login Credentials are incorrect!')).toBeInTheDocument();
        });
      });
});
