import React, { Component } from 'react';
import axios from 'axios';
import { Header, Grid, Segment } from 'semantic-ui-react';

import WeatherSearch from '../WeatherSearch/WeatherSearch';
import WeatherOutput from '../WeatherOutput/WeatherOutput';
import SavedCities from '../SavedCities/SavedCities';

import storage from '../util/storage';

const style = {
  mainTitle: {
    paddingTop: '5rem',
    fontSize: '5rem',
    color: '#fff',
    fontFamily: 'Lobster',
    fontWeight: 400
  }
}

class App extends Component {
  state = {
    data: null,
    error: false,
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
        this.setState({ data: response.data, error: false });
      })
      .catch(err => this.setState({ error: true }));
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

  removeCity = cityToRemove => {
    if (!storage.isAvailable()) return;
    storage.deleteData('city_temps', cityToRemove);
    this.setState({ savedCities: this.state.savedCities.filter(city => city !== cityToRemove) });
  }

  render() {
    const { data, error, savedCities } = this.state;
    return (
      <div>
        <Header as='h1' textAlign='center' style={style.mainTitle}>
          Weather <span role="img" aria-label="Sun behind clouds emoji">⛅</span>
        </Header>
        <Grid container centered stackable>
          <Grid.Row>
            <Grid.Column width={11}>
              <Segment>
                <p>Please enter city name to see the current temperature</p>
                <WeatherSearch handleSubmit={this.handleSubmit} error={error} />
                {data && <WeatherOutput data={data} saveCity={this.saveCity(data)} />}
              </Segment>
            </Grid.Column>
            <Grid.Column width={5}>
              <Segment>
                <SavedCities cities={savedCities} makeRequest={this.makeApiRequest} removeCity={this.removeCity} />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
