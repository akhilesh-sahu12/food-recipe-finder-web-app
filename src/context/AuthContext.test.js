import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AuthProvider, useAuth } from './AuthContext';

const MockComponent = () => {
  const { authenticated, userLogin, logout, registerUser, userLoginDetails, currentUser } = useAuth();

  return (
    <div>
      <div>{`Authenticated: ${authenticated}`}</div>
      <div>{`Current User: ${currentUser.name}`}</div>
      <button onClick={() => userLogin()}>Login</button>
      <button onClick={() => logout()}>Logout</button>
      <button onClick={() => registerUser({ name: 'TestUser' })}>Register User</button>
      <button onClick={() => userLoginDetails({ name: 'LoggedUser' })}>Login with User Details</button>
    </div>
  );
};

describe('AuthContext', () => {
  test('provides initial values', () => {
    render(
      <AuthProvider>
        <MockComponent />
      </AuthProvider>
    );

    expect(screen.getByText(/Authenticated/i)).toBeInTheDocument();
    expect(screen.getByText(/Current User:/i)).toBeInTheDocument();
  });

  test('registers and logs in a user', () => {
    render(
      <AuthProvider>
        <MockComponent />
      </AuthProvider>
    );

    userEvent.click(screen.getByText(/Register User/i));
    expect(screen.getByText(/Current User/i)).toBeInTheDocument();

    userEvent.click(screen.getAllByText(/Login/i)[0]);
    expect(screen.getByText(/Register User/i)).toBeInTheDocument();
    expect(screen.getByText(/Authenticated: true/i)).toBeInTheDocument();
  });

  test('logs out a user', () => {
    render(
      <AuthProvider>
        <MockComponent />
      </AuthProvider>
    );

    userEvent.click(screen.getAllByText(/Login/i)[0]);
    userEvent.click(screen.getByText(/Logout/i));

    expect(screen.getByText(/Logout/i)).toBeInTheDocument();
    expect(screen.getByText(/Authenticated: false/i)).toBeInTheDocument();
  });

  test('logs in with user details', () => {
    render(
      <AuthProvider>
        <MockComponent />
      </AuthProvider>
    );

    userEvent.click(screen.getByText(/Login with User Details/i));

    expect(screen.getByText(/Login with User Details/i)).toBeInTheDocument();
    expect(screen.getByText(/Current User: LoggedUser/i)).toBeInTheDocument();
    expect(screen.getByText(/Authenticated: /i)).toBeInTheDocument();
  });
});
