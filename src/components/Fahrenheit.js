import React, { Component } from 'react'
import WeatherContext from '../contexts/WeatherContext'

class Fahrenheit extends Component {
  static contextType = WeatherContext
  render() {
    if (this.context.displayUnits === 'imperial') {
      return (
        <div className="ui dark card hidden uk-animation-fade uk-animation-fast">
          <div className="ui statistic">
            <div className="value">{this.context.fahrenheit}°</div>
            <div className="label">Fahrenheit</div>
          </div>
        </div>
      )
    }
    return ''
  }
}

export default Fahrenheit
