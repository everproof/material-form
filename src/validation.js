// @flow
const lengthValidator = (type: 'less' | 'more', limit: number, value: string) =>
  type === 'less' ? value.length > limit : value.length < limit

const lengthValidate = (type: 'less' | 'more') => (limit: ?number) => (
  value: string,
) =>
  value && limit && lengthValidator(type, limit, value)
    ? `Must be ${limit} characters or ${type}`
    : null

export const maxLengthValidate = lengthValidate('less')

export const minLengthValidate = lengthValidate('more')

export const requiredValidate = (required: ?boolean) => (value: string) =>
  required && !value ? 'Required' : null
