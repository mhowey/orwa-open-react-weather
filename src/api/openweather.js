import axios from 'axios'

// request format
// https://api.openweathermap.org/data/2.5/weather?appid={appid}&lon={lon}&lat={lat}

// you'll need to get your own API key from openweathermap.com
// https://openweathermap.org/api
// then go to the .env file and put it there... 
export default axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
  params: {
    appid: process.env.REACT_APP_ID,
  },
})

console.log('env::', process.env)