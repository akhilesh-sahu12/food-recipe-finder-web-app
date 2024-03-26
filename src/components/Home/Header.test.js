import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('renders Header component', () => {
    const { getByText, getByTestId } = render(<Header />);

    // Check if the header title is rendered
    expect(getByText('Food Recipe Finder')).toBeInTheDocument();

    // Check if all icons are rendered
    expect(getByTestId('menu-icon')).toBeInTheDocument();
    expect(getByTestId('search-icon')).toBeInTheDocument();
    expect(getByTestId('brightness-icon')).toBeInTheDocument();
    expect(getByTestId('envelope-icon')).toBeInTheDocument();
    expect(getByTestId('bell-icon')).toBeInTheDocument();
    expect(getByTestId('grip-icon')).toBeInTheDocument();
    expect(getByTestId('person-icon')).toBeInTheDocument();
  });

  it('triggers OpenSidebar function when menu icon is clicked', () => {
    const openSidebarMock = jest.fn();
    const { getByTestId } = render(<Header OpenSidebar={openSidebarMock} />);

    // Click on the menu icon
    fireEvent.click(getByTestId('menu-icon'));

    // Check if the OpenSidebar function is called
    expect(openSidebarMock).toHaveBeenCalled();
  });
});
