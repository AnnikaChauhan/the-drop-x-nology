import React, { Component } from 'react'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

class DropdownSelection extends Component {
  render() {
    return (
      <ButtonToolbar>
        <ToggleButtonGroup 
          type="radio" 
<<<<<<< HEAD
          defaultValue={1} 
          name="releaseType"
        >
          <ToggleButton 
            name="releaseType" 
            onClick={this.props.handleInput}
=======
          // defaultValue={1} 
          name="releaseType"
          
        >
          <ToggleButton 
            onChange={this.props.handleInput}
>>>>>>> 030e699178044334852d6ebe5e703d88a58bdef3
            value={"Single"}
          >
            Single
          </ToggleButton>
          <ToggleButton 
<<<<<<< HEAD
            name="releaseType" 
            onClick={this.props.handleInput}
=======
            onChange={this.props.handleInput}
>>>>>>> 030e699178044334852d6ebe5e703d88a58bdef3
            value={"EP"}
          >
            EP
          </ToggleButton>
          <ToggleButton 
<<<<<<< HEAD
            name="releaseType" 
            onClick={this.props.handleInput}
=======
            onChange={this.props.handleInput}
>>>>>>> 030e699178044334852d6ebe5e703d88a58bdef3
            value={"Album"}
          >
            Album
          </ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>
    );
  }
}

export default DropdownSelection;
