"use client"
import React from 'react';
import './Button.css';
const Button = ({ onClick, label }) => {
  return (
    <a className="button"onClick={onClick}>{label}</a>
  );
};

export default Button;
