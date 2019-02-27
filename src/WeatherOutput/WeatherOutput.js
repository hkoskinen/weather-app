import React from 'react';
import { Segment, Button, Card, Icon } from 'semantic-ui-react';

const style = {
  header: {
    fontSize: '2.0rem'
  },
  description: {
    fontSize: '1.5rem'
  },
  segment: {
    border: 0
  }
};

const WeatherOutput = props => {
  const { data, saveCity } = props;
  return (
    <Segment padded textAlign='center' style={style.segment}>
      <Card color='blue' centered>
        <Card.Content>
          <Card.Header style={style.header}>{data.name}, {data.sys.country}</Card.Header>
          <Card.Meta>Current temperature</Card.Meta>
          <Card.Description style={style.description}>
            <strong>{data.main.temp.toFixed(1)}°C</strong>
          </Card.Description>
        </Card.Content>
        {saveCity &&
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button
                animated
                secondary
                fluid onClick={() => saveCity(data.name)}
              >
                <Button.Content visible>Save city</Button.Content>
                <Button.Content hidden>
                  <Icon name='arrow right' />
                </Button.Content>
              </Button>
            </div>
          </Card.Content>
        }
      </Card>
    </Segment>
  );
};

export default WeatherOutput;
