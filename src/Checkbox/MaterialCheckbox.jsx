// @flow
import React from 'react'
import Checkbox from 'material-ui/Checkbox'
import { Checkbox as RFMUCheckbox } from 'redux-form-material-ui'

import MaterialControl from '../MaterialControl'
import type { Props } from '../MaterialControl'

export default ({
  isInGroup = false,
  ...props
}: Props & { isInGroup?: boolean }) => (
  <MaterialControl control={isInGroup ? Checkbox : RFMUCheckbox} {...props} />
)
