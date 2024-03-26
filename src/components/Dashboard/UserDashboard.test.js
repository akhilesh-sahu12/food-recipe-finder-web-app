import React from 'react';
import { render, screen } from '@testing-library/react';
import UserDashboard from './UserDashboard';
import { UserProvider } from '../../context/UserContext';
import { AuthProvider } from '../../context/AuthContext';

// Mock the context provider
jest.mock('../../context/UserContext', () => ({
    ...jest.requireActual('../../context/UserContext'),
    UserContext: {
        Consumer: ({ children }) => children({
            user: {
                username: 'testUser',
                history: ['search1', 'search2'],
                favorites: ['recipe1', 'recipe2']
            }
        })
    }
}));

// Mock the auth context
jest.mock('../../context/AuthContext', () => ({
    ...jest.requireActual('../../context/AuthContext'),
    useAuth: () => ({
        currentUser: {
            username: 'currentUser'
        }
    })
}));

describe('UserDashboard Component', () => {
    it('renders UserDashboard component with user details', () => {
        render(
            <AuthProvider>
                <UserProvider>
                    <UserDashboard />
                </UserProvider>
            </AuthProvider>
        );

        // Check if the component renders without crashing
        expect(screen.getByText(/Welcome back, currentUser!/i)).toBeInTheDocument();

        // Check if search history is rendered
        expect(screen.getByText(/Search History/i)).toBeInTheDocument();
        expect(screen.getByText('search1')).toBeInTheDocument();
        expect(screen.getByText('search2')).toBeInTheDocument();

        // Check if favorite recipes are rendered
        expect(screen.getByText(/Favorite Recipes/i)).toBeInTheDocument();
        expect(screen.getByText('recipe1')).toBeInTheDocument();
        expect(screen.getByText('recipe2')).toBeInTheDocument();
    });

    it('renders UserDashboard component without user details', () => {
        // Mocking no user data
        jest.spyOn(React, 'useContext').mockReturnValueOnce({ user: null });

        render(
            <AuthProvider>
                <UserProvider>
                    <UserDashboard />
                </UserProvider>
            </AuthProvider>
        );

        // Check if the component renders without crashing
        expect(screen.getByText(/No user details available./i)).toBeInTheDocument();
    });
});
