export const convert = {
  kelvin: {
    to: {
      celsius: value => Math.round(value - 273.15),
      fahrenheit: value => Math.round((value - 273.15) * 1.8 + 32),
    },
  },
  dt: {
    to: {
      locale: dt => new Date(dt * 1000).toLocaleString(),
    },
  },
}
