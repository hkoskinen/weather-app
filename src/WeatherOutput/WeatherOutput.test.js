import React from 'react';
import WeatherOutput from './WeatherOutput';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<WeatherOutput />);
});