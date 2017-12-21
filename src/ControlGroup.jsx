// @flow
import React from 'react'
import { Field } from 'redux-form'
import type { ElementType } from 'react'

export function Controls({
  control: Control,
  input: { name, onChange, onBlur, onFocus, value: inputValue },
  meta,
  options,
}: {
  control: ElementType | Function,
  input: {
    name: string,
    onBlur: (Array<*>) => void,
    onChange: (Array<*>) => void,
    onFocus: Function,
    value: string,
  },
  meta: Object,
  options: Array<{ label: string, value: number | string | Object }>,
}) {
  return (
    <div>
      {options.map(({ label, value }, index) => {
        const handleChange = (event: SyntheticEvent<>, checked: boolean) => {
          const arr = [...inputValue]
          if (checked) {
            arr.push(value)
          } else {
            arr.splice(arr.indexOf(value), 1)
          }

          onBlur(arr)

          return onChange(arr)
        }

        const checked = inputValue.includes(value.toString())

        return (
          <Control
            checked={checked}
            isInGroup
            key={`${label}-${name}-${value.toString()}`}
            label={label}
            meta={meta}
            name={`${name}[${index}]`}
            onChange={handleChange}
            onFocus={onFocus}
            value={value}
          />
        )
      })}
    </div>
  )
}

export default function CheckboxGroup(props: Object) {
  return <Field component={Controls} type="checkbox" {...props} />
}
