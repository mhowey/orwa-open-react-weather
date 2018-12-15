import React, { Component, createContext } from 'react'
import openweather from '../api/openweather'
import convert from '../helpers/convert'

const Context = createContext({ appTitle: 'Dragon Weather' })

export class WeatherStore extends Component {
  state = {
    lat: null,
    lon: null,
    appTitle: 'Dragon Weather App',
    kelvin: null,
    celsius: null,
    fahrenheit: null,
    humidity: null,
    displayUnits: 'metric',
    spinner: true,
    loadingMessage: 'Getting your location...',
    locationName: '',
    city: ''
  }

  getPosition = function() {
    return new Promise(function(resolve, reject) {
      return navigator.geolocation.getCurrentPosition(resolve, reject)
    })
  }

  // go fetch our data and update the store state
  componentDidMount() {
    this.getPosition().then(async response => {
      const { latitude, longitude } = response.coords
      await this.setState({
        lat: latitude,
        lon: longitude,
        loadingMessage: 'Getting your weather...',
        locationName: response.name
      })
      // use our axios api to fetch the weather with the lat and lon
      openweather
        .get(openweather.baseURL, {
          params: {
            lon: this.state.lon,
            lat: this.state.lat
          }
        })
        .then(async response => {
          const { temp, humidity } = response.data.main
          const city = response.data.name
          // perform conversions with helper functions
          const time = convert.dt.to.locale(response.data.dt)
          const fahrenheit = convert.kelvin.to.fahrenheit(temp)
          const celsius = convert.kelvin.to.celsius(temp)

          // update our state!
          await this.setState({
            kelvin: temp,
            humidity,
            spinner: false,
            fahrenheit,
            celsius,
            time,
            city
          })
        })
    })
  }

  setContextState = state => {
    this.setState(state)
  }

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onWeatherChange: this.setContextState }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Context
