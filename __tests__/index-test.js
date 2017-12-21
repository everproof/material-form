import {
  Checkbox,
  RadioGroup,
  Select,
  Switch,
  SwitchGroup,
  TextField,
} from '../src'
import CheckboxComponent from '../src/Checkbox'
import RadioGroupComponent from '../src/RadioGroup'
import SelectComponent from '../src/Select'
import SwitchComponent from '../src/Switch'
import SwitchGroupComponent from '../src/SwitchGroup'
import TextFieldComponent from '../src/TextField'

describe('testing exports', () => {
  test('should export', () => {
    expect(Checkbox).toBe(CheckboxComponent)
    expect(RadioGroup).toBe(RadioGroupComponent)
    expect(Select).toBe(SelectComponent)
    expect(Switch).toBe(SwitchComponent)
    expect(SwitchGroup).toBe(SwitchGroupComponent)
    expect(TextField).toBe(TextFieldComponent)
  })
})
