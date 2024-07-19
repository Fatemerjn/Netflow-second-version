import React from 'react';
import './styles/PricingBox.scss';
import { Link } from 'react-router-dom';

const PricingBox = ({ ptitle, price, content }) => {
  return (
    <Link to="/register" className="Box">
      <div className="innerBox">
        <div className="ptitle">
          <p>{ptitle}</p>
        </div>
        <p style={{ top: '60%' }}>{price}</p>
      </div>
      <p className="content">{content}</p>
      <div className="ptitle" style={{ top: '290px' }}>
        <p>Sign Up</p>
      </div>
    </Link>
  );
};

export default PricingBox;
