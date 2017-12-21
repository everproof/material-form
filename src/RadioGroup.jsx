// @flow
import React from 'react'
import { Field } from 'redux-form'
import { RadioGroup } from 'redux-form-material-ui'

export default function ReduxFormRadioGroup(props: Object) {
  return <Field component={RadioGroup} {...props} />
}
