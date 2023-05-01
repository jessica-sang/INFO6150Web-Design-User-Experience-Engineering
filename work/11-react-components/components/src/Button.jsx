import React from 'react';
import './Button.css';

function Button(props) {
  const { type = 'button', visual = 'button', onClick, children } = props;
  const className = `Button Button--${visual}`;

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;