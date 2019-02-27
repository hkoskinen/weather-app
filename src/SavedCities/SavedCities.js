import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import SavedCity from './SavedCity';

class SavedCities extends Component {
  render() {
    const { cities } = this.props;
    return (
      <div className="savedCities">
        <Header as='h2' content='Saved Cities' textAlign='center' />
        {!cities.length && <p>Save your favorite cities here</p>}
        { cities.map((city, index) => (
          <SavedCity
            key={city + index}
            name={city}
            getWeather={ () => this.props.makeRequest(city) }
          />
        ))}
      </div>
    );
  }
}

export default SavedCities;
