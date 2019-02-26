import React, { Fragment } from 'react';
import './WeatherOutput.css';

import TempOutput from '../TempOutput/TempOutput';

const WeatherOutput = ({ data }) => {
  return (
    <div className="WeatherOutput">
      {data ? (
        <Fragment>
          <p>Temperature currently in {data.name}, {data.sys.country}</p>
          <TempOutput temperature={data.main.temp} />
        </Fragment>

      ) : (
        <p>Please search for the city you want to see current temperature.</p>
      )}
    </div>

  );
};

export default WeatherOutput;