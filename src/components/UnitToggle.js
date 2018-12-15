import React, { Component } from 'react'
import WeatherContext from '../contexts/WeatherContext'

export default class UnitToggle extends Component {
  static contextType = WeatherContext

  render() {
    this.context.displayUnits === 'imperial'
      ? (this.imperialActive = 'positive')
      : (this.imperialActive = '')

    this.context.displayUnits === 'metric'
      ? (this.metricActive = 'positive')
      : (this.metricActive = '')

    return (
      <div>
        <div className="ui buttons uk-animation-shake">
          <button
            onClick={() =>
              this.context.onWeatherChange({ displayUnits: 'imperial' })
            }
            className={`ui button ${this.imperialActive}`}
          >
            Imperial
          </button>
          <div className="or" />
          <button
            onClick={() =>
              this.context.onWeatherChange({ displayUnits: 'metric' })
            }
            className={`ui button ${this.metricActive}`}
          >
            Metric
          </button>
        </div>
      </div>
    )
  }
}
