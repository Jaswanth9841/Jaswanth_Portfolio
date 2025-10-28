import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from '../App'

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <HelmetProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    )
    expect(document.body).toBeTruthy()
  })
})

