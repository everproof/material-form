import React from 'react'
import { createShallow } from 'material-ui/test-utils'

import Select from '../src/Select'

describe('<Select />', () => {
  let shallow

  beforeEach(() => {
    shallow = createShallow()
  })

  test('init', () => {
    const wrapper = shallow(<Select name="select" />)
    expect(wrapper.length).toBe(1)
  })
})
