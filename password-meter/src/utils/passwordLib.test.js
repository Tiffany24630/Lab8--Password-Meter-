import { describe, it, expect } from 'vitest'
import { calculatePasswordStrength } from './passwordLib'

describe('calculatePasswordStrength', () => {
  it('returns vacía for empty password', () => {
    expect(calculatePasswordStrength('')).toBe('vacía')
  })

  it('returns débil for passwords shorter than 8 characters', () => {
    expect(calculatePasswordStrength('abc')).toBe('débil')
  })

  it('returns media for passwords with 8+ chars and no numbers or symbols', () => {
    expect(calculatePasswordStrength('abcdefgh')).toBe('media')
  })

  it('returns fuerte for passwords with at least one number', () => {
    expect(calculatePasswordStrength('abcd1234')).toBe('fuerte')
  })

  it('returns muy fuerte for passwords with number and symbol', () => {
    expect(calculatePasswordStrength('abcd1234!')).toBe('muy fuerte')
  })

  it('exactly 8 chars without numbers is not débil', () => {
    expect(calculatePasswordStrength('abcdefgh')).not.toBe('débil')
  })

  it('7 chars is not media', () => {
    expect(calculatePasswordStrength('abcdefg')).not.toBe('media')
  })

  it('symbols only and less than 8 chars is débil', () => {
    expect(calculatePasswordStrength('!!!')).toBe('débil')
  })
})