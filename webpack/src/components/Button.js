import React from 'react';

const Button = ({ label, onClick }) => (
  <button style={{ padding: '10px', fontSize: '16px' }} onClick={onClick}>
    {label}
  </button>
);

export default Button;
