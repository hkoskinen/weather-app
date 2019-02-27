import React, { Fragment } from 'react';
import './WeatherOutput.css';

import TempOutput from '../TempOutput/TempOutput';

const WeatherOutput = props => {
  const { data, saveCity } = props;
  return (
    <div className="WeatherOutput">
      {data ? (
        <Fragment>
          <p>Temperature currently in {data.name}, {data.sys.country}</p>
          {saveCity && <button onClick={() => saveCity(data.name)}>
            save
          </button>}
          <TempOutput temperature={data.main.temp} />
        </Fragment>

      ) : (
        <p>Please search for the city you want to see current temperature.</p>
      )}
    </div>

  );
};

export default WeatherOutput;
