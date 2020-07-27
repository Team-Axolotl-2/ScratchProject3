import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    height: 265,
  },
});

/*
When the slider is moved, evaluate its positions
if it falls withing certain positions, 
and the state is not currently set to the value at that position, 
update state with the new depthLevel.
*/
function handleChange (e, depthLevel, onSliderChange) {
  console.log ('Current Depth:   ', depthLevel, '   ===============================')
  if (e.y < 265 && depthLevel !== 0) {
    console.log('STATE TO 0');
    onSliderChange(0)
  };
  if (e.y > 330 && e.y < 355  && depthLevel !== 1) {
    console.log('STATE TO 1');
    onSliderChange(1)
  };
  if (e.y > 420 && e.y < 445  && depthLevel !== 2) {
    console.log('STATE TO 2');
    onSliderChange(2)
  };
  if (e.y > 500 && depthLevel !== 3) {
    console.log('STATE TO 3');
    onSliderChange(3)
  };
}

export default function VerticalSlider(props) {
  const classes = useStyles();
  
  const [formData, setFormData] = useState({
    initialStateKey: 'initialStateValue',
  });

  return (
    <React.Fragment>
      <Typography id="vertical-slider" gutterBottom>
      </Typography>
      <div className={classes.root}>
        <Slider
          onChange={(event) => {handleChange(event, props.depthLevel, props.onSliderChange)}}
          orientation="vertical"
          defaultValue={100}
          aria-labelledby="vertical-slider"
        />
      </div>
    </React.Fragment>
  );
}
