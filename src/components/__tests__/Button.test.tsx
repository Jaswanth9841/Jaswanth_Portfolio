import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '../ui/Button'

describe('Button', () => {
  it('renders button with text', () => {
    const { getByText } = render(<Button>Click me</Button>)
    expect(getByText('Click me')).toBeInTheDocument()
  })

  it('handles click events', async () => {
    const user = userEvent.setup()
    let clicked = false
    const { getByText } = render(<Button onClick={() => { clicked = true }}>Click me</Button>)
    
    await user.click(getByText('Click me'))
    expect(clicked).toBe(true)
  })

  it('applies variant classes', () => {
    const { container } = render(<Button variant="primary">Primary</Button>)
    const button = container.querySelector('button')
    expect(button?.className).toContain('bg-primary')
  })
})

