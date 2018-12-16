import React, { Component } from 'react'
import WeatherContext from '../contexts/WeatherContext'

export default class LocationDenied extends Component {
  static contextType = WeatherContext
  render() {
    return (
      <div className="ui active dimmer fail">
        <i className="ui icon exclamation triangle large uk-text-danger uk-animation-shake " />
        <div className="ui big text loader uk-animation-fade">
          {this.context.loadingMessage}
        </div>
      </div>
    )
  }
}
