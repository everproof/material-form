import Checkbox, { MaterialCheckbox } from '../../src/Checkbox'
import CheckboxComponent from '../../src/Checkbox/Checkbox'
import MaterialCheckboxComponent from '../../src/Checkbox/MaterialCheckbox'

describe('testing exports', () => {
  test('should export', () => {
    expect(Checkbox).toBe(CheckboxComponent)
    expect(MaterialCheckbox).toBe(MaterialCheckboxComponent)
  })
})
