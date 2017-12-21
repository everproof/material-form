import React from 'react'
import { createShallow } from 'material-ui/test-utils'

import MaterialSwitch from '../../src/Switch/MaterialSwitch'

describe('<MaterialSwitch />', () => {
  let shallow

  beforeEach(() => {
    shallow = createShallow()
  })

  test('init not in group', () => {
    const wrapper = shallow(<MaterialSwitch />)
    expect(wrapper.length).toBe(1)
  })

  test('init in group', () => {
    const wrapper = shallow(<MaterialSwitch isInGroup />)
    expect(wrapper.length).toBe(1)
  })
})
