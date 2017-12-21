// @flow
import React from 'react'
import { Field } from 'redux-form'
import TextField from 'redux-form-material-ui/lib/TextField'

import {
  maxLengthValidate,
  minLengthValidate,
  requiredValidate,
} from './validation'

export default function ReduxFormTextField({
  flex,
  ...props
}: {
  flex?: boolean,
  maxLength?: number,
  minLength?: number,
  name: string,
  required?: boolean,
  type?: string,
}) {
  return (
    <Field
      component={TextField}
      id={props.name}
      InputLabelProps={props.type === 'date' ? { shrink: true } : {}}
      margin="normal"
      style={flex ? {} : { display: 'block' }}
      validate={[
        maxLengthValidate(props.maxLength),
        minLengthValidate(props.minLength),
        requiredValidate(props.required),
      ]}
      {...props}
    />
  )
}

ReduxFormTextField.defaultProps = {
  flex: false,
  maxLength: 0,
  minLength: 0,
  required: false,
  type: 'text',
}
