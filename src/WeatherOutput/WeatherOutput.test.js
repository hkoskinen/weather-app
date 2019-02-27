import React from 'react';
import WeatherOutput from './WeatherOutput';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const data = {
    name: 'Whistler',
    sys: {
      country: 'CA'
    },
    main: {
      temp: 1
    }
  };
  shallow(<WeatherOutput data={data} />);
});
