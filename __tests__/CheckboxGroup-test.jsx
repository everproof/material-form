import React from 'react'
import { createShallow } from 'material-ui/test-utils'

import CheckboxGroup from '../src/CheckboxGroup'

describe('<CheckboxGroup />', () => {
  let shallow

  beforeEach(() => {
    shallow = createShallow()
  })

  test('init', () => {
    const wrapper = shallow(<CheckboxGroup name="checkboxGroup" />)
    expect(wrapper.length).toBe(1)
  })
})
