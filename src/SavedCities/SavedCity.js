import React from 'react';
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

export default SavedCity;
