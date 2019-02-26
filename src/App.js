import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import WeatherSearch from './WeatherSearch/WeatherSearch';
import WeatherOutput from './WeatherOutput/WeatherOutput';

class App extends Component {
  state = {
    data: null,
    error: null
  }

  makeReq = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;

    axios.get(url)
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(err => this.setState({ error: 'Invalid city name' }));
  }

  handleSubmit = city => {
    console.log(`${city} submitted`);
    this.setState({ error: '' });
    this.makeReq(city);
  }

  render() {
    const { data, error } = this.state;
    return (
      <div className="App">
        <div className="container">
          <h1 className="App-title">
            Weather <span role="img" aria-label="Sun behind clouds emoji">⛅</span>
          </h1>

          <WeatherSearch handleSubmit={this.handleSubmit} error={error} />
          <WeatherOutput data={data} />
        </div>
      </div>
    );
  }
}

export default App;
