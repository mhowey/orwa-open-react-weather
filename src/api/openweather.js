import axios from 'axios'

// request format
// https://api.openweathermap.org/data/2.5/weather?appid={appid}&lon={lon}&lat={lat}
// appid: '61c2038a004b0641dd136a68d77098c5',
// local postman mock: https://60d2f55a-271e-4bd7-9de0-3d52897392a3.mock.pstmn.io/

export default axios.create({
  // baseURL: 'https://60d2f55a-271e-4bd7-9de0-3d52897392a3.mock.pstmn.io/',
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
  params: {
    appid: '61c2038a004b0641dd136a68d77098c5',
  },
})
