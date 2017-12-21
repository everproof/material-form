import React from 'react'
import { createShallow } from 'material-ui/test-utils'

import TextField from '../src/TextField'

describe('<TextField />', () => {
  let shallow

  beforeEach(() => {
    shallow = createShallow()
  })

  test('init', () => {
    const wrapper = shallow(<TextField name="textField" />)
    expect(wrapper.length).toBe(1)
  })

  test('date', () => {
    const wrapper = shallow(<TextField name="textField" type="date" />)
    expect(wrapper.props().InputLabelProps).toEqual({ shrink: true })
  })

  test('flex', () => {
    const wrapper = shallow(<TextField flex name="textField" />)
    expect(wrapper.props().style).toEqual({})
  })
})
