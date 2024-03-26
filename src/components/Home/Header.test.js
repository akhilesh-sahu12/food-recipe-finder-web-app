import React from 'react';
import { render, fireEvent, getAllByText } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('renders Header component', () => {
    const { getByText, getByTestId } = render(<Header />);

    // Check if the header title is rendered
    expect(getByText('Food Recipe Finder')).toBeInTheDocument();
  });
});
