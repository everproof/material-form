import React from 'react'
import { createShallow } from 'material-ui/test-utils'

import RadioGroup from '../src/RadioGroup'

describe('<RadioGroup />', () => {
  let shallow

  beforeEach(() => {
    shallow = createShallow()
  })

  test('init', () => {
    const wrapper = shallow(<RadioGroup name="radioGroup" />)
    expect(wrapper.length).toBe(1)
  })
})
