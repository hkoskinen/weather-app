import React, { Component } from 'react';
import './TempOutput.css';

class TempOutput extends Component {
  render() {
    const { temperature } = this.props;
    return (
      <div className="TempOutput">{temperature.toFixed(1)}°C</div>
    );
  }
}

export default TempOutput;