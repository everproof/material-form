import React from 'react'
import Checkbox from 'material-ui/Checkbox'
import { createShallow } from 'material-ui/test-utils'
import { FormHelperText } from 'material-ui/Form'
import pick from 'lodash/pick'

import MaterialControl from '../src/MaterialControl'

describe('<MaterialControl />', () => {
  let shallow

  beforeEach(() => {
    shallow = createShallow()
  })

  test('init', () => {
    const wrapper = shallow(<MaterialControl control={Checkbox} />)
    expect(wrapper.length).toBe(1)
  })

  test('dive', () => {
    const wrapper = shallow(<MaterialControl control={Checkbox} />).dive()
    expect(wrapper.length).toBe(1)
  })

  test('className', () => {
    const wrapper = shallow(
      <MaterialControl className="class" control={Checkbox} />,
    ).dive()
    expect(wrapper.props().className).toEqual('class Component-control-1')
  })

  test('error', () => {
    const wrapper = shallow(
      <MaterialControl
        className="class"
        control={Checkbox}
        meta={{ error: 'Error', touched: true }}
      />,
    ).dive()
    expect(
      pick(wrapper.find(FormHelperText).props(), [
        'error',
        'children',
        'style',
      ]),
    ).toEqual({
      error: true,
      children: 'Error',
      style: {},
    })
  })

  test('warning', () => {
    const wrapper = shallow(
      <MaterialControl
        className="class"
        control={Checkbox}
        meta={{ touched: true, warning: 'Warning' }}
      />,
    ).dive()
    expect(
      pick(wrapper.find(FormHelperText).props(), [
        'error',
        'children',
        'style',
      ]),
    ).toEqual({
      error: true,
      children: 'Warning',
      style: {},
    })
  })
})
