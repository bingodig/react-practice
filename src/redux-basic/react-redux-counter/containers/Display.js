import React, { PropTypes } from 'react';
import { connect } from 'react-redux';


let Display = ({counter}) => {
  return (
    <div>
      <p>{counter}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

Display = connect(mapStateToProps)(Display)

export default Display;
