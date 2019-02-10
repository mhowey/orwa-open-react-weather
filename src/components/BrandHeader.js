import React from 'react'
import WeatherContext from '../contexts/WeatherContext'
import CityDisplay from './CityDisplay'
import logo from '../assets/logo.svg'

class BrandHeader extends React.Component {
  static contextType = WeatherContext
  render() {
    return (
      <div className="ui content center aligned">
        <div>
          <img className="brand-logo" src={logo} alt="logo" />
        </div>
        <div className="header">{this.context.appTitle}</div>
        <div>Updated: {this.context.time}</div>
        <CityDisplay />
      </div>
    )
  }
}

export default BrandHeader
