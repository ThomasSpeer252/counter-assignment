import { render, screen } from '@testing-library/react';
import Counter from '../components/Counter';
import '../App.css';
import count from '../components/Counter';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'

beforeEach(() => {
  render(<Counter />);
  const count = screen.getByTestId('count') 
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByText('Counter')).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  expect(screen.getByText('0')).toBeInTheDocument();
  
});

test('clicking + increments the count', () => {
  userEvent.click(screen.getByText('+'));
  expect(screen.getByText('1')).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  userEvent.click(screen.getByText('-'));
  expect(screen.getByText('-1')).toBeInTheDocument();
});
