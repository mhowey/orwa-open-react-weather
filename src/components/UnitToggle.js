import React, { Component } from 'react'
import WeatherContext from '../contexts/WeatherContext'
import ReactGA from 'react-ga'

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
            onClick={() => {
              // google analytics event
              ReactGA.event({
                category: 'Navigation',
                action: 'Clicked Imperial'
              })
              // update the context state
              this.context.onWeatherChange({ displayUnits: 'imperial' })
            }}
            className={`ui button ${this.imperialActive}`}
          >
            Imperial
          </button>
          <div className="or" />
          <button
            onClick={() => {
              // google analytics event
              ReactGA.event({
                category: 'Navigation',
                action: 'Clicked Metric'
              })
              // update the context state
              this.context.onWeatherChange({ displayUnits: 'metric' })
            }}
            className={`ui button ${this.metricActive}`}
          >
            Metric
          </button>
        </div>
      </div>
    )
  }
}
