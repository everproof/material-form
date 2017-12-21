// @flow
const lengthValidator = (
  type: 'less' | 'more',
  limit: number,
  value: string,
) => {
  if (type === 'less') {
    return value.length > limit
  } else if (type === 'more') {
    return value.length < limit
  }

  throw new Error('`type` must be either "less" or "more"')
}

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
