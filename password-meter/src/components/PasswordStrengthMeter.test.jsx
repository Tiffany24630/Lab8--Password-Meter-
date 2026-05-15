import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import PasswordStrengthMeter from './PasswordStrengthMeter'

describe('PasswordStrengthMeter', () => {
  it('renders password input', () => {
    render(<PasswordStrengthMeter />)

    expect(screen.getByLabelText(/contraseña/i)).toBeInTheDocument()
  })

  it('renders initial strength as vacía', () => {
    render(<PasswordStrengthMeter />)

    expect(screen.getByText('vacía')).toBeInTheDocument()
  })

  it('shows débil for short password', async () => {
    const user = userEvent.setup()

    render(<PasswordStrengthMeter />)

    const input = screen.getByLabelText(/contraseña/i)

    await user.type(input, 'abc')

    expect(screen.getByText('débil')).toBeInTheDocument()
  })

  it('shows media for 8+ chars without numbers', async () => {
    const user = userEvent.setup()

    render(<PasswordStrengthMeter />)

    const input = screen.getByLabelText(/contraseña/i)

    await user.type(input, 'abcdefgh')

    expect(screen.getByText('media')).toBeInTheDocument()
  })

  it('shows fuerte for password with at least one number', async () => {
    const user = userEvent.setup()

    render(<PasswordStrengthMeter />)

    const input = screen.getByLabelText(/contraseña/i)

    await user.type(input, 'abcd1234')

    expect(screen.getByText('fuerte')).toBeInTheDocument()
  })

  it('shows muy fuerte for password with number and symbol', async () => {
    const user = userEvent.setup()

    render(<PasswordStrengthMeter />)

    const input = screen.getByLabelText(/contraseña/i)

    await user.type(input, 'abcd1234!')

    expect(screen.getByText('muy fuerte')).toBeInTheDocument()
  })

  it('returns to vacía when password is cleared', async () => {
    const user = userEvent.setup()

    render(<PasswordStrengthMeter />)

    const input = screen.getByLabelText(/contraseña/i)

    await user.type(input, 'abcd1234!')
    await user.clear(input)

    expect(screen.getByText('vacía')).toBeInTheDocument()
  })
})