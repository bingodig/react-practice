import React, { PropTypes } from 'react';

const Button = ({behavior, children, onClick}) => {
  return (
    <button
      onClick={onClick}
    >{ children }</button>
  )
}

Button.propTypes = {
  behavior: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button;
