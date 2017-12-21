import React from 'react'
import { createShallow } from 'material-ui/test-utils'

import SwitchGroup from '../src/SwitchGroup'

describe('<SwitchGroup />', () => {
  let shallow

  beforeEach(() => {
    shallow = createShallow()
  })

  test('init', () => {
    const wrapper = shallow(<SwitchGroup name="switchGroup" />)
    expect(wrapper.length).toBe(1)
  })
})
