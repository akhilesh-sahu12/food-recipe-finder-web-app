import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Header from './Header';

test('renders Header component', () => {
  // Mock function for OpenSidebar
  const openSidebarMock = jest.fn();

  render(<Header OpenSidebar={openSidebarMock} />);
});
