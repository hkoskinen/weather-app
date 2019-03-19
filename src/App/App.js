import React, { Component } from 'react';
import { Header, Grid, Segment } from 'semantic-ui-react';

import WeatherSearch from '../WeatherSearch/WeatherSearch';
import WeatherOutput from '../WeatherOutput/WeatherOutput';
import SavedCities from '../SavedCities/SavedCities';

import storage from '../util/storage';
import  { makeApiRequest } from '../api/request';

const style = {
  mainTitle: {
    paddingTop: '5rem',
    fontSize: '5rem',
    color: '#fff',
    fontFamily: 'Lobster',
    fontWeight: 400
  }
}

const storageKey = 'city_temps';

class App extends Component {
  state = {
    data: null,
    error: false,
    savedCities: []
  }

  componentDidMount() {
    const savedCities = storage.getData(storageKey);
    if (savedCities !== null) {
      this.setState({ savedCities });
    }
  }

  handleSubmit = city => {
    makeApiRequest(city)
      .then(response => {
        this.setState({ data: response.data, error: false });
      })
      .catch(() => this.setState({ error: true }));
  }

  saveCity = data => {
    if (!storage.isAvailable() || data === null) return;
    if (this.state.savedCities.indexOf(data.name) !== -1) {
      return;
    } else {
      return city => {
        storage.setData(storageKey, city);
        const savedCities = this.state.savedCities;
        this.setState({ savedCities: [...savedCities, city]})
      }
    }
  }

  removeCity = cityToRemove => {
    if (!storage.isAvailable()) return;
    storage.deleteData(storageKey, cityToRemove);
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
                <WeatherSearch handleSubmit={this.handleSubmit} error={error} />
                {data && <WeatherOutput data={data} saveCity={this.saveCity(data)} />}
              </Segment>
            </Grid.Column>
            <Grid.Column width={5}>
              <Segment>
                <SavedCities cities={savedCities} makeRequest={this.handleSubmit} removeCity={this.removeCity} />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
