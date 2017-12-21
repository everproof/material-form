import React from 'react'
import { createShallow } from 'material-ui/test-utils'

import Switch from '../../src/Switch/Switch'

describe('<Switch />', () => {
  let shallow

  beforeEach(() => {
    shallow = createShallow()
  })

  test('init', () => {
    const wrapper = shallow(<Switch name="switch" />)
    expect(wrapper.length).toBe(1)
  })
})
