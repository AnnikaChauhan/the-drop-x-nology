import React, { Component } from 'react';
import "./Toggle.module.scss";

class ToggleButton extends Component {
  render() {
    return (
      <>
        <div className='custom-control custom-switch toggle'>
          <input
            type='checkbox'
            className='custom-control-input'
            id='customSwitches'
            readOnly
          />
          <label className='custom-control-label' htmlFor='customSwitches'>
            PM
          </label>
        </div>
      </>
    );
  }
}



export default ToggleButton;