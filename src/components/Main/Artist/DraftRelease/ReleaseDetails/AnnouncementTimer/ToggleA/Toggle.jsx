import React, { Component } from 'react';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import "./Toggle.module.scss";

class ToggleButtonA extends Component {
  render() {
    return (
      <>
        <ButtonToolbar>
          <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
            <ToggleButton value={1}>AM</ToggleButton>
            <ToggleButton value={2}>PM</ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
      </>
    );
  }
}



export default ToggleButtonA;