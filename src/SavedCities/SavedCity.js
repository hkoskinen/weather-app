import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const style = {
  button: {
    marginBottom: '1rem'
  }
};

const SavedCity = ({name, getWeather, removeCity}) => (
  <div>
    <Button.Group fluid>
      <Button
        content={name}
        color='blue'
        onClick={() => getWeather(name)}
        style={style.button}
      />
      <Button
        basic
        icon='trash alternate'
        color='black'
        style={style.button}
        onClick={() => removeCity(name)} />
    </Button.Group>
  </div>
);
SavedCity.propTypes = {
  name: PropTypes.string.isRequired,
  getWeather: PropTypes.func.isRequired,
  removeCity: PropTypes.func.isRequired
};

export default SavedCity;
