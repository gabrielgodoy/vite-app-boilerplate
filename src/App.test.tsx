import { render, screen } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'
import { App, WrappedApp } from './App'

describe('App', () => {
  it('Renders Hello World', () => {
    render(<WrappedApp />)
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World')
  })

  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/not-found-route']}>
        <App />
      </MemoryRouter>
    )
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Not Found')
  })
})
