import axios from 'axios';

export const makeApiRequest = city => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
  return axios.get(url);
};
