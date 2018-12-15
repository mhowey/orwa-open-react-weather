import React, { Component } from 'react'
import { WeatherStore } from '../contexts/WeatherContext'
import WeatherDisplay from '../components/WeatherDisplay'
import WeatherContext from '../contexts/WeatherContext'

import '../styles/App.scss'

class App extends Component {
  static contextType = WeatherContext
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

export default App
