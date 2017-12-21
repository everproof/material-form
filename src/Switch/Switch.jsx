// @flow
import React from 'react'
import { Field } from 'redux-form'

import { requiredValidate } from '../validation'

import MaterialSwitch from './MaterialSwitch'

export default function ReduxFormSwitch(props: {
  name: string,
  required: boolean,
}) {
  return (
    <Field
      component={MaterialSwitch}
      validate={[requiredValidate(props.required)]}
      {...props}
    />
  )
}
