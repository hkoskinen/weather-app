import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import SavedCity from './SavedCity';

class SavedCities extends Component {
  render() {
    const { cities, removeCity } = this.props;
    return (
      <div className="savedCities">
        <Header as='h2' content='Saved Cities' textAlign='center' />
        {!cities.length && <p>Save your favorite cities here</p>}
        { cities.map((city, index) => (
          <SavedCity
            key={city + index}
            name={city}
            getWeather={this.props.makeRequest}
            removeCity={removeCity}
          />
        ))}
      </div>
    );
  }
}
SavedCities.propTypes = {
  cities: PropTypes.array.isRequired,
  removeCity: PropTypes.func.isRequired
};

export default SavedCities;
