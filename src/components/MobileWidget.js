import React from 'react';
import './Widget.css'

const Widget = ({ size, title, content }) => {
  const classNames = `widget widget-${size}`;

  return (
    <div className={classNames}>
      <h3 className="widget-title">{title}</h3>
      <div className="widget-content">{content}</div>
    </div>
  );
};

export default Widget;
