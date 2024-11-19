import { render, screen, fireEvent } from '@testing-library/react';
import { Counter, Greeting, AlertButton } from './latihan';
import '@testing-library/jest-dom';
import React from 'react';

describe('Latihan Component Tests', () => {
  test('Counter Default Value must be 0', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue).toHaveTextContent('0');
  });

  test('Increment works when button clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByTestId('increment-button');
    fireEvent.click(incrementButton);
    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue).toHaveTextContent('1');
  });

  test('Decrement works when button clicked', () => {
    render(<Counter />);
    const decrementButton = screen.getByTestId('decrement-button');
    fireEvent.click(decrementButton);
    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue).toHaveTextContent('-1');
  });

  test('Reset the count using reset button', () => {
    render(<Counter />);
    const resetButton = screen.getByTestId('reset-button');
    fireEvent.click(resetButton);
    const counterValue = screen.getByTestId('counter-value');
    expect(counterValue).toHaveTextContent('0');
  });

  test('Greeting component should say Hello, {your name}', () => {
    render(<Greeting name="Sulci" />);
    const greetingText = screen.getByTestId('greeting');
    expect(greetingText).toHaveTextContent('Hello, Sulci');
  });

  test('Greeting component should say Hello, {your lecturer\'s name}', () => {
    render(<Greeting name="Dr. Sulci" />);
    const greetingText = screen.getByTestId('greeting');
    expect(greetingText).toHaveTextContent('Hello, Dr. Sulci');
  });

  test('Triggers alert with correct message when clicked', () => {
    const alertMessage = 'Hello, this is an alert!';
    window.alert = jest.fn(); // Mock the alert function
    render(<AlertButton message={alertMessage} />);
    const alertButton = screen.getByTestId('alert-button');
    fireEvent.click(alertButton);
    expect(window.alert).toHaveBeenCalledWith(alertMessage);
  });
});
