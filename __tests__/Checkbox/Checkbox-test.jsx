import React from 'react'
import { createShallow } from 'material-ui/test-utils'

import Checkbox from '../../src/Checkbox/Checkbox'

describe('<Checkbox />', () => {
  let shallow

  beforeEach(() => {
    shallow = createShallow()
  })

  test('init', () => {
    const wrapper = shallow(<Checkbox name="checkbox" />)
    expect(wrapper.length).toBe(1)
  })
})
