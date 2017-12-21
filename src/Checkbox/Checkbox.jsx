// @flow
import React from 'react'
import { Field } from 'redux-form'

import { requiredValidate } from '../validation'

import MaterialCheckbox from './MaterialCheckbox'

export default function ReduxFormCheckbox(props: {
  name: string,
  required?: boolean,
}) {
  return (
    <Field
      component={MaterialCheckbox}
      id={props.name}
      validate={[requiredValidate(props.required)]}
      {...props}
    />
  )
}

ReduxFormCheckbox.defaultProps = { required: false }
