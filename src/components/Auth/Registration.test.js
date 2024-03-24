// Registration.test.js

import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Registration from './Registration';
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
        registerUser: jest.fn(),
    }),
}));

describe('Registration Component', () => {
    it('renders Registration component', () => {
        render(
            <AuthProvider>
                <Router>
                    <Registration />
                </Router>
            </AuthProvider>
        );

        // Check if the component renders without crashing
        expect(screen.getByText(/Registration Form/i)).toBeInTheDocument();

        // Use queryAllByText for elements with the same text
        const usernameLabels = screen.queryAllByLabelText(/Username/i);
        expect(usernameLabels.length).toBeGreaterThan(0);

        const emailLabels = screen.queryAllByLabelText(/Email/i);
        expect(emailLabels.length).toBeGreaterThan(0);

        const passwordLabels = screen.queryAllByLabelText(/Password/i);
        expect(passwordLabels.length).toBeGreaterThan(0);

        const confirmPasswordLabels = screen.queryAllByLabelText(/Confirm Password/i);
        expect(confirmPasswordLabels.length).toBeGreaterThan(0);

        expect(screen.getByText(/Already have an account?/)).toBeInTheDocument();
    });

    it('submits the form with matching passwords', async () => {
        render(
            <AuthProvider>
                <Router>
                    <Registration />
                </Router>
            </AuthProvider>
        );

        // Fill in the form
        fireEvent.change(screen.getAllByLabelText(/Username/i)[0], { target: { value: 'akhil' } });
        fireEvent.change(screen.getAllByLabelText(/Email/i)[0], { target: { value: 'akhil@example.com' } });
        fireEvent.change(screen.getAllByLabelText(/Password/i)[0], { target: { value: 'password1234' } });
        fireEvent.change(screen.getAllByLabelText(/Confirm Password/i)[0], { target: { value: 'password1234' } });
  

        // Submit the form
        fireEvent.click(screen.getByText(/Register/i));

        // Wait for success message and navigation
        await waitFor(() => {
            expect(screen.getByText('Registration successful! Please login.')).toBeInTheDocument();
        });

        // Additional wait for navigation if needed
        // You may need to add a specific element that appears after navigation
        // await waitFor(() => {
        //   expect(screen.getByText(/Your Navigation Element/i)).toBeInTheDocument();
        // });
    });

    it('displays warning for non-matching passwords', async () => {
        render(
            <AuthProvider>
                <Router>
                    <Registration />
                </Router>
            </AuthProvider>
        );

        // Fill in the form with non-matching passwords
        fireEvent.change(screen.getAllByLabelText(/Username/i)[0], { target: { value: 'testuser' } });
        fireEvent.change(screen.getAllByLabelText(/Email/i)[0], { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getAllByLabelText(/Password/i)[0], { target: { value: 'password123' } });
        fireEvent.change(screen.getAllByLabelText(/Confirm Password/i)[0], { target: { value: 'wrongpassword' } });
        fireEvent.click(screen.getByText(/Register/i));

        // Wait for warning message
        await waitFor(() => {
            expect(screen.getByText('Password and confirm password do not match!')).toBeInTheDocument();
        });
    });
});
