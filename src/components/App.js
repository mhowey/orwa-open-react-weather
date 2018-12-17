import React, { Component } from 'react'
import { WeatherStore } from '../contexts/WeatherContext'
import WeatherDisplay from '../components/WeatherDisplay'
import WeatherContext from '../contexts/WeatherContext'
import ReactGA from 'react-ga'

import '../styles/App.scss'

export default class App extends Component {
  static contextType = WeatherContext
  componentDidMount() {
    ReactGA.initialize('UA-131106750-1')
  }
  render() {
    return (
      <WeatherStore>
        <div className="app ui screen-center">
          <WeatherDisplay />
        </div>
      </WeatherStore>
    )
  }
}
