import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  // Check for an element specific to your application
  const appComponent = screen.getByTestId('app-component');
  expect(appComponent).toBeInTheDocument();
});
