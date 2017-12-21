// @flow
import React from 'react'
import Switch from 'material-ui/Switch'
import { Switch as RFMUSwitch } from 'redux-form-material-ui'

import MaterialControl from '../MaterialControl'
import type { Props } from '../MaterialControl'

export default ({
  isInGroup = false,
  ...props
}: Props & { isInGroup?: boolean }) => (
  <MaterialControl control={isInGroup ? Switch : RFMUSwitch} {...props} />
)
