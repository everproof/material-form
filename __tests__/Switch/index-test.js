import Switch, { MaterialSwitch } from '../../src/Switch'
import SwitchComponent from '../../src/Switch/Switch'
import MaterialSwitchComponent from '../../src/Switch/MaterialSwitch'

describe('testing exports', () => {
  test('should export', () => {
    expect(Switch).toBe(SwitchComponent)
    expect(MaterialSwitch).toBe(MaterialSwitchComponent)
  })
})
