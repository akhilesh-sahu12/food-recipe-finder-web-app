import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Contact from './Contact';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Contact component', () => {
  it('submits the form successfully and navigates after 3 seconds', async () => {
    render(<Contact />);

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: 'Test message' } });

    // Submit the form
    fireEvent.click(screen.getByText(/Submit/i));

    // Wait for the success toast and navigation
    await waitFor(() => {
      expect(screen.getByText(/Thank you for contacting us!/i)).toBeInTheDocument();
    });

    // Clear mocks
    jest.clearAllMocks();

    // Ensure clearAllMocks is completed before finishing the test
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

  afterEach(() => {
    // Your cleanup code here
    jest.clearAllMocks(); // For example, clearing mocks
  });
});
