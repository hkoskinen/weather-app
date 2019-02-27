import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import WeatherSearch from '../WeatherSearch/WeatherSearch';
import WeatherOutput from '../WeatherOutput/WeatherOutput';
import SavedCities from '../SavedCities/SavedCities';

import storage from '../util/storage';

class App extends Component {
  state = {
    data: null,
    error: null,
    savedCities: []
  }

  componentDidMount() {
    const savedCities = storage.getData('city_temps');
    if (savedCities !== null) {
      this.setState({ savedCities });
    }
  }

  makeApiRequest = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
    axios.get(url)
      .then(response => {
        this.setState({ data: response.data, error: '' });
      })
      .catch(err => this.setState({ error: 'Invalid city name' }));
  }

  handleSubmit = city => {
    this.makeApiRequest(city);
  }

  saveCity = data => {
    if (!storage.isAvailable() || data === null) return;
    if (this.state.savedCities.indexOf(data.name) !== -1) {
      return;
    } else {
      return city => {
        storage.setData('city_temps', city);
        const savedCities = this.state.savedCities;
        this.setState({ savedCities: [...savedCities, city]})
      }
    }
  }


  render() {
    const { data, error, savedCities } = this.state;
    return (
      <div className="App">
        <div className="container">
          <h1 className="App-title">
            Weather <span role="img" aria-label="Sun behind clouds emoji">⛅</span>
          </h1>

          <WeatherSearch handleSubmit={this.handleSubmit} error={error} />
          <WeatherOutput data={data} saveCity={this.saveCity(data)} />
          <SavedCities cities={savedCities} makeRequest={this.makeApiRequest} />
        </div>
      </div>
    );
  }
}

export default App;
