import React from 'react';
import './styles/Button.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Button = ({ text, color, isPrimary, type, showIcon }) => {
  return (
    <button
      type={type}
      style={color}
      className={`button ${isPrimary ? 'primary' : 'secondary'}`}
    >
      {showIcon && (
        <FontAwesomeIcon icon={faUserPlus} className="button-icon" />
      )}
      {text}
    </button>
  );
};

export default Button;
