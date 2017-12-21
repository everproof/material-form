// @flow
import React from 'react'

import MaterialCheckbox from './Checkbox/MaterialCheckbox'
import ControlGroup from './ControlGroup'

export default function CheckboxGroup(props: Object) {
  return <ControlGroup control={MaterialCheckbox} {...props} />
}
