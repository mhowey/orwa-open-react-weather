import React, { Component } from 'react'
import WeatherContext from '../contexts/WeatherContext'

class Celsius extends Component {
  static contextType = WeatherContext
  render() {
    if (this.context.displayUnits === 'metric') {
      return (
        <div className="ui dark card hidden uk-animation-fade uk-animation-fast">
          <div className="ui statistic">
            <div className="value">{this.context.celsius}°</div>
            <div className="label">Celsius</div>
          </div>
        </div>
      )
    }
    return ''
  }
}

export default Celsius
