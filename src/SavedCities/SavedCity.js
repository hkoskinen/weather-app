import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const style = {
  button: {
    marginBottom: '1rem'
  }
};

const SavedCity = props => (
  <div>
    <Button.Group fluid>
      <Button
        content={props.name}
        color='blue'
        onClick={props.getWeather}
        style={style.button}
      />
      <Button
        basic
        icon='trash alternate'
        color='black'
        style={style.button}
        onClick={() => props.removeCity(props.name)} />
    </Button.Group>
  </div>
);
SavedCity.propTypes = {
  name: PropTypes.string.isRequired,
  getWeather: PropTypes.func.isRequired,
  removeCity: PropTypes.func.isRequired
};

export default SavedCity;
