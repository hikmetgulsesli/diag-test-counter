import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeToggle } from '../components/ThemeToggle';

describe('ThemeToggle', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  it('defaults to light theme on first load', () => {
    render(<ThemeToggle />);
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('switches to dark theme when clicked', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: /switch to dark theme/i });
    fireEvent.click(button);
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('switches back to light theme when clicked again', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: /switch to dark theme/i });
    
    // First click - dark
    fireEvent.click(button);
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
    
    // Second click - back to light
    fireEvent.click(button);
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('persists theme preference in localStorage', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: /switch to dark theme/i });
    
    fireEvent.click(button);
    expect(localStorage.getItem('theme')).toBe('dark');
    
    fireEvent.click(button);
    expect(localStorage.getItem('theme')).toBe('light');
  });

  it('loads saved theme from localStorage', () => {
    localStorage.setItem('theme', 'dark');
    render(<ThemeToggle />);
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('shows moon icon in light mode', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: /switch to dark theme/i });
    expect(button.innerHTML).toContain('path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"');
  });

  it('shows sun icon in dark mode', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button');
    
    // Switch to dark
    document.documentElement.setAttribute('data-theme', 'dark');
    
    // Check for sun icon paths
    expect(button.innerHTML).toContain('circle cx="12" cy="12" r="4"');
  });
});
