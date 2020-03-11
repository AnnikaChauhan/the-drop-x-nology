import React, { Component } from 'react'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

class DropdownSelection extends Component {
  render() {
    return (
      <ButtonToolbar>
        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
          <ToggleButton value={1}>Single</ToggleButton>
          <ToggleButton value={2}>EP</ToggleButton>
          <ToggleButton value={3}>Album</ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>
    );
  }

}

export default DropdownSelection;
