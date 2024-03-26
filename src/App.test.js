import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

test('renders App component', () => {
  const { getByText } = render(
    <Router>
      <App />
    </Router>
  );

  // Check if certain text exists in the rendered component
  const headerText = getByText(/Home/i);
  expect(headerText).toBeInTheDocument();
});
