import React from 'react'
import { createShallow } from 'material-ui/test-utils'

import MaterialCheckbox from '../../src/Checkbox/MaterialCheckbox'

describe('<MaterialCheckbox />', () => {
  let shallow

  beforeEach(() => {
    shallow = createShallow()
  })

  test('init not in group', () => {
    const wrapper = shallow(<MaterialCheckbox />)
    expect(wrapper.length).toBe(1)
  })

  test('init in group', () => {
    const wrapper = shallow(<MaterialCheckbox isInGroup />)
    expect(wrapper.length).toBe(1)
  })
})
