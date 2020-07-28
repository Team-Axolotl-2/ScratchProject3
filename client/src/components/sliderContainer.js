// Create the card for each individual company// Create the list of companies
import React, { Component, useState } from 'react';
import Slider from './slider.js';

export default function SliderContainer(props) {

  const [formData, setFormData] = useState({
    initialStateKey: 'initialStateValue',
  });

  return (
    <div>
      {/* <h3>DEPTH GAUGE</h3> */}
      <div className="sliderContainer">
        <Slider className="sliderBar" onSliderChange={props.onSliderChange} depthLevel={props.depthLevel} />
      </div>
    </div>
  );
}
