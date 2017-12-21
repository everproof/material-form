// @flow
import React from 'react'
import Switch from 'material-ui/Switch'
import RFMUSwitch from 'redux-form-material-ui/lib/Switch'

import MaterialControl from '../MaterialControl'
import type { Props } from '../MaterialControl'

export default function MaterialSwitch({
  isInGroup = false,
  ...props
}: Props & {
  isInGroup?: boolean,
}) {
  return (
    <MaterialControl control={isInGroup ? Switch : RFMUSwitch} {...props} />
  )
}
