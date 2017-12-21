// @flow
import React from 'react'

import MaterialSwitch from './Switch/MaterialSwitch'
import ControlGroup from './ControlGroup'

export default function SwitchGroup(props: Object) {
  return <ControlGroup control={MaterialSwitch} {...props} />
}
