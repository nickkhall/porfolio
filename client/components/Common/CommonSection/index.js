import React from 'react';

const CommonSection = ({ children, className = '' }) => (
  <div className={`common-section ${className}`}>
    { children }
  </div>
);

export default CommonSection;
