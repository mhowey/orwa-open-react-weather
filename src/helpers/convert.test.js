import { convert } from './convert'

test('convert kelvin to fahrenheit', () => {
  expect(convert.kelvin.to.fahrenheit(273.15)).toBe(32)
  expect(convert.kelvin.to.fahrenheit(274)).toBe(34)
  expect(convert.kelvin.to.fahrenheit(0)).toBe(-460)
})

test('convert kelvin to celsius', () => {
  expect(convert.kelvin.to.celsius(273.15)).toBe(0)
  expect(convert.kelvin.to.celsius(274)).toBe(1)
  expect(convert.kelvin.to.celsius(0)).toBe(-273)
})

test('convert dt to date string', () => {
  expect(convert.dt.to.locale(1544973900)).toBe('12/16/2018, 10:25:00 AM')
})
