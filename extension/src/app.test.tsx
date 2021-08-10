import { render, screen } from '@testing-library/react';
import App from './app';

test('renders app', () => {
  render(<App />);
  const linkElement = screen.getByText(/quepon/i);
  expect(linkElement).toBeInTheDocument();
});
