// @flow
import React from 'react'
import { Field } from 'redux-form'
import Select from 'redux-form-material-ui/lib/Select'

import { requiredValidate } from './validation'

export default function ReduxFormSelect({
  name,
  ...props
}: {
  name: string,
  required?: boolean,
}) {
  return (
    <Field
      component={Select}
      name={name}
      validate={requiredValidate(props.required)}
      {...props}
    />
  )
}

ReduxFormSelect.defaultProps = { required: false }
