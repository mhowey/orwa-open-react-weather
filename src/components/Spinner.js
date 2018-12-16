import React, { Component } from 'react'
import WeatherContext from '../contexts/WeatherContext'
import LocationDenied from './LocationDenied'

class Spinner extends Component {
  static contextType = WeatherContext
  render() {
    if (!this.context.location) {
      return <LocationDenied />
    }
    return (
      <div className="ui active dimmer">
        <div className="ui big text loader">{this.context.loadingMessage}</div>
      </div>
    )
  }
}

Spinner.defaultProps = {
  loadingMessage: 'Loading...'
}

export default Spinner
