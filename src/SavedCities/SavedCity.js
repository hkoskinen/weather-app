import React from 'react';
import { Button } from 'semantic-ui-react';

const style = {
  button: {
    marginBottom: '1rem'
  }
};

const SavedCity = props => (
  <Button
    basic
    color='teal'
    fluid
    onClick={props.getWeather}
    style={style.button}
  >
    {props.name}
  </Button>
);

export default SavedCity;
