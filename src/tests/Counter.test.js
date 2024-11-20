import { render, screen } from '@testing-library/react';
import Counter from './Counter';
import '../App.css';


beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText('Welcome to my website!')).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  expect(count).equals(0);
  
});

test('clicking + increments the count', () => {
  expect(count).equals(1);
});

test('clicking - decrements the count', () => {
  expect(count).equals(-1);
});
