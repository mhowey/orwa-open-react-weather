import React, { Component } from 'react'

// context
import WeatherContext from '../contexts/WeatherContext'

// components
import BrandHeader from './BrandHeader'
import Celsius from './Celsius'
import Fahrenheit from './Fahrenheit'
import Humidity from './Humidity'
import UnitToggle from './UnitToggle'
import Spinner from './Spinner'

class WeatherDisplay extends Component {
  static contextType = WeatherContext
  render() {
    if (this.context.spinner) {
      return <Spinner loadingMessage={this.context.loadingMessage} />
    }
    return (
      <div className="ui card">
        <BrandHeader />
        <div className="ui center aligned">
          <UnitToggle />
        </div>
        <Celsius />
        <Fahrenheit />
        <Humidity />
      </div>
    )
  }
}

export default WeatherDisplay
