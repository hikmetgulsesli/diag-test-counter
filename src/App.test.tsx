import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders counter heading', () => {
    render(<App />)
    expect(screen.getByText('Counter App')).toBeInTheDocument()
  })

  it('renders counter display with initial value 0', () => {
    render(<App />)
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('renders increment button', () => {
    render(<App />)
    expect(screen.getByText(/\+ Increment/i)).toBeInTheDocument()
  })

  it('renders decrement button', () => {
    render(<App />)
    expect(screen.getByText(/− Decrement/i)).toBeInTheDocument()
  })

  it('renders reset button', () => {
    render(<App />)
    expect(screen.getByText('Reset')).toBeInTheDocument()
  })

  it('renders theme toggle button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /🌙/ })).toBeInTheDocument()
  })
})