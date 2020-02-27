import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the page correctly', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/The Drop x Nology/i);
  expect(linkElement).toBeInTheDocument();
});
