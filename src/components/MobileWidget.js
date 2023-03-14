import React from 'react';
import './Widget.css'

const Widget = ({ size, title, content }) => {
  const classNames = `widget widget-${size}`;

  return (
    <div>
    <h2>My Widget</h2>
    <p>This is my widget.</p>
  </div>

  );
};

export default Widget;
