import { render, screen } from '@testing-library/react';
import App from './App';

test('App reder test', () => {
  render(<App />);
  const heading = screen.getByRole("heading")
  
  expect(heading).toBeInTheDocument();
  expect(heading.textContent).toBe("Hi! AWS CLI");
});
