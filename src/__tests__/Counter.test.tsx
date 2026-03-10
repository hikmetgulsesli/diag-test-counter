import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from '../components/Counter';

describe('Counter', () => {
  it('renders with initial value of 0', () => {
    render(<Counter />);
    expect(screen.getByText('0')).toBeDefined();
  });

  it('increments counter when + button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: /increase counter by 1/i });
    
    fireEvent.click(incrementButton);
    expect(screen.getByText('1')).toBeDefined();
    
    fireEvent.click(incrementButton);
    expect(screen.getByText('2')).toBeDefined();
  });

  it('decrements counter when - button is clicked', () => {
    render(<Counter />);
    const decrementButton = screen.getByRole('button', { name: /decrease counter by 1/i });
    
    // First increment to 1
    const incrementButton = screen.getByRole('button', { name: /increase counter by 1/i });
    fireEvent.click(incrementButton);
    
    // Then decrement
    fireEvent.click(decrementButton);
    expect(screen.getByText('0')).toBeDefined();
  });

  it('resets counter when Reset button is clicked', () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: /increase counter by 1/i });
    const resetButton = screen.getByRole('button', { name: /reset counter to zero/i });
    
    // Increment multiple times
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    expect(screen.getByText('3')).toBeDefined();
    
    // Reset
    fireEvent.click(resetButton);
    expect(screen.getByText('0')).toBeDefined();
  });

  it('has accessible labels on all buttons', () => {
    render(<Counter />);
    
    expect(screen.getByRole('button', { name: /decrease counter by 1/i })).toBeDefined();
    expect(screen.getByRole('button', { name: /reset counter to zero/i })).toBeDefined();
    expect(screen.getByRole('button', { name: /increase counter by 1/i })).toBeDefined();
  });

  it('counter value has proper aria-live attribute', () => {
    render(<Counter />);
    const counterValue = screen.getByText('0');
    expect(counterValue.getAttribute('aria-live')).toBe('polite');
    expect(counterValue.getAttribute('aria-atomic')).toBe('true');
  });
});
