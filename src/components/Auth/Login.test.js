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

        // Use queryAllByText for elements with the same text
        const emailLabels = screen.queryAllByLabelText(/Email/i);
        expect(emailLabels.length).toBeGreaterThan(0);

        const passwordLabels = screen.queryAllByLabelText(/Password/i);
        expect(passwordLabels.length).toBeGreaterThan(0);

        expect(screen.getByText(/Don't have an account?/)).toBeInTheDocument();
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
        fireEvent.change(screen.getAllByLabelText(/Email/i)[0], { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getAllByLabelText(/Password/i)[0], { target: { value: 'password123' } });

        // Submit the form
        fireEvent.click(screen.getByText(/Login/i));

        // Wait for success message and navigation
        await waitFor(() => {
            expect(screen.getByText('Login successful!')).toBeInTheDocument();
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
        fireEvent.change(screen.getAllByLabelText(/Email/i)[0], { target: { value: 'wrong@example.com' } });
        fireEvent.change(screen.getAllByLabelText(/Password/i)[0], { target: { value: 'wrongpassword' } });
        fireEvent.click(screen.getByText(/Login/i));

        // Wait for warning message
        await waitFor(() => {
            expect(screen.getByText('Login Credentials are incorrect!')).toBeInTheDocument();
        });
    });
});
