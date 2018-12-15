import React, { Component } from 'react'
import WeatherContext from '../contexts/WeatherContext'

export default class CityDisplay extends Component {
  static contextType = WeatherContext
  render() {
    return <div>Current Weather in {this.context.city}</div>
  }
}
