import React, { Component } from 'react';
import './WeatherSearch.css';

class WeatherSearch extends Component {
  state = {
    input: ''
  }

  handleChange = e => {
    this.setState({ input: e.target.value });
  }

  handleGetWeather = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.input);
    this.setState({ input: '' });
  }

  render() {
    const { input } = this.state;
    const { error } = this.props;
    return (
      <div className="WeatherSearch">
        <form onSubmit={this.handleGetWeather}>

          <input
            type="text"
            placeholder={error ? error : "City name"}
            required
            value={input}
            onChange={this.handleChange} />

          <button type="submit">Get weather</button>
        </form>
      </div>
    );

  }
}

export default WeatherSearch;