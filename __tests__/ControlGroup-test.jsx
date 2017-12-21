import React from 'react'
import { createShallow } from 'material-ui/test-utils'

import MaterialCheckbox from '../src/Checkbox/MaterialCheckbox'
import ControlGroup, { Controls } from '../src/ControlGroup'

describe('<ControlGroup />', () => {
  let shallow

  beforeEach(() => {
    shallow = createShallow()
  })

  test('init', () => {
    const wrapper = shallow(<ControlGroup name="controlGroup" />)
    expect(wrapper.length).toBe(1)
  })
})

describe('<Controls />', () => {
  let shallow

  beforeEach(() => {
    shallow = createShallow()
  })

  test('init', () => {
    const wrapper = shallow(
      <Controls
        control={MaterialCheckbox}
        input={{
          name: 'controls',
          onBlur: () => {},
          onChange: () => {},
          onFocus: () => {},
          value: '1',
        }}
        meta={{}}
        options={[{ label: '1', value: '1' }, { label: '2', value: '2' }]}
      />,
    )
    expect(wrapper.length).toBe(1)
  })

  test('checked', () => {
    const wrapper = shallow(
      <Controls
        control={MaterialCheckbox}
        input={{
          name: 'controls',
          onBlur: () => {},
          onChange: arr => {
            expect(arr).toEqual(['1', '2'])
          },
          onFocus: () => {},
          value: '1',
        }}
        meta={{}}
        options={[{ label: '1', value: '1' }, { label: '2', value: '2' }]}
      />,
    )
    wrapper.props().children[1].props.onChange(null, true)
  })

  test('unchecked', () => {
    const wrapper = shallow(
      <Controls
        control={MaterialCheckbox}
        input={{
          name: 'controls',
          onBlur: () => {},
          onChange: arr => {
            expect(arr).toEqual([])
          },
          onFocus: () => {},
          value: '1',
        }}
        meta={{}}
        options={[{ label: '1', value: '1' }, { label: '2', value: '2' }]}
      />,
    )
    wrapper.props().children[0].props.onChange(null, false)
  })
})
