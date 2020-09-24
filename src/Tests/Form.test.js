import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  const {getByLabelText, getByText } = render(<App />);
  
  expect(getByLabelText('Fullname')).toBeInTheDocument();
});