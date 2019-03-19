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
          <label>
            <p>Please enter city name to see the current temperature</p>
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
          </label>
        </Form.Field>
        <Button fluid primary size='big' type='submit'>
          Get temperature
        </Button>
      </Form>
    );

  }
}
WeatherSearch.propTypes = {
  error: PropTypes.bool
};

export default WeatherSearch;
