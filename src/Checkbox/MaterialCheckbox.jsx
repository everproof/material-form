// @flow
import React from 'react'
import Checkbox from 'material-ui/Checkbox'
import RFMUCheckbox from 'redux-form-material-ui/lib/Checkbox'

import MaterialControl from '../MaterialControl'
import type { Props } from '../MaterialControl'

export default ({
  isInGroup = false,
  ...props
}: Props & { isInGroup?: boolean }) => (
  <MaterialControl control={isInGroup ? Checkbox : RFMUCheckbox} {...props} />
)
