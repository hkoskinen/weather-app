import React, { Component } from 'react';

const SavedCity = props => (
  <div>
    <p>{props.name}</p>
    <button onClick={props.getWeather}>Get weather for {props.name}</button>
  </div>
);

class SavedCities extends Component {
  render() {
    const { cities } = this.props;
    return (
      <div className="savedCities">
        { cities.map((city, index) => (
          <SavedCity key={city + index} name={city} getWeather={ () => this.props.makeRequest(city) } />
        ))}
      </div>
    );
  }
}

export default SavedCities;
