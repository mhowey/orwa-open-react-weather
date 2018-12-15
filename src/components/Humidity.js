import React, { Component } from 'react'
import WeatherContext from '../contexts/WeatherContext'

class Humidity extends Component {
  static contextType = WeatherContext
  render() {
    return (
      <div className="ui card uk-animation-fade uk-animation-fast">
        <div className="ui statistic">
          <div className="value">{this.context.humidity} %</div>
          <div className="label">Humidity</div>
        </div>
      </div>
    )
  }
}

export default Humidity
