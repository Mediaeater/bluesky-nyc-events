import React from 'react';
import { render, screen } from '@testing-library/react';

test('simple render test', () => {
  render(<div>Hello Test</div>);
  const element = screen.getByText(/Hello Test/i);
  expect(element).toBeInTheDocument();
});
