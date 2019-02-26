import React from 'react';
import WeatherSearch from './WeatherSearch';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<WeatherSearch />);
});