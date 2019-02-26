import React from 'react';
import TempOutput from './TempOutput';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  let temperature = 5;
  shallow(<TempOutput temperature={temperature} />);
});