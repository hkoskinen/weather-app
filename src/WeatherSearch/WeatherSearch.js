import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Label, Button } from 'semantic-ui-react';

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
    return (
      <Form onSubmit={this.handleGetWeather}>
        <Form.Field>
          <Input
            fluid
            error={this.props.error}
            value={input}
            onChange={this.handleChange}
            placeholder='City name'
          />
          {
            this.props.error &&
            <Label basic color='red' pointing>
              Please enter valid city name
            </Label>
          }
        </Form.Field>
        <Button fluid primary size='big'>
          Get temperature
        </Button>
      </Form>
    );

  }
}
WeatherSearch.propTypes = {
  error: PropTypes.bool.isRequired
};

export default WeatherSearch;
