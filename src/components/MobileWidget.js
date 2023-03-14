import React from 'react';
import { FaTimes } from 'react-icons/fa';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import './Widget.css'

const MobileWidget = () => {
  const [showWidget, setShowWidget] = React.useState(true);
  const [width, setWidth] = React.useState(200);
  const [height, setHeight] = React.useState(200);

  const onClose = () => {
    setShowWidget(false);
  };

  const onResize = (event, { size }) => {
    setWidth(size.width);
    setHeight(size.height);
  };

  return showWidget ? (
    <Draggable handle=".handle">
      <ResizableBox
        width={width}
        height={height}
        onResize={onResize}
        minConstraints={[100, 100]}
        maxConstraints={[window.innerWidth - 100, window.innerHeight - 100]}
      >
        <div className="widget">
          <div className="handle">
            <FaTimes onClick={onClose} />
          </div>
          <div className="content">Your widget content goes here</div>
        </div>
      </ResizableBox>
    </Draggable>
  ) : null;
};

export default MobileWidget;
