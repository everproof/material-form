import {
  maxLengthValidate,
  minLengthValidate,
  requiredValidate,
} from '../src/validation'

describe('validation.js', () => {
  test('maxLengthValidate', () => {
    expect(maxLengthValidate(5)('')).toBe(null)
    expect(maxLengthValidate(5)('x')).toBe(null)
    expect(maxLengthValidate(5)('more than 5')).toBe(
      'Must be 5 characters or less',
    )
  })

  test('minLengthValidate', () => {
    expect(minLengthValidate(5)('')).toBe(null)
    expect(minLengthValidate(5)('x')).toBe('Must be 5 characters or more')
    expect(minLengthValidate(5)('more than 5')).toBe(null)
  })

  test('requiredValidate', () => {
    expect(requiredValidate(true)('')).toBe('Required')
    expect(requiredValidate(true)('value')).toBe(null)
  })
})
